import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from '@/use-cases/create-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('CreateGym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should create a new gym', async () => {
    const { gym } = await sut.execute({
      title: 'Gym 01',
      description: '',
      phone: '',
      latitude: 40.748817,
      longitude: -73.985428,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
