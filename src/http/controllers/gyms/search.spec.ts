import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Search Gyms (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })
  it('should return 200 on success', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'My Gym',
        description: 'The best gym in the world',
        phone: '12345678',
        latitude: 40.748817,
        longitude: -73.985428,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Not My Gym',
        description: 'The best gym in the world',
        phone: '12345678',
        latitude: 40.748817,
        longitude: -73.985428,
      })

    const response = await request(app.server)
      .get('/gyms/search')
      .query({ q: 'Not' })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms[0]).toEqual(
      expect.objectContaining({
        title: 'Not My Gym',
      }),
    )
  })
})
