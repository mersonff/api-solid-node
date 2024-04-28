import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })
  it('should return 201 on success', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
    })

    expect(response.statusCode).toEqual(201)
  })
})
