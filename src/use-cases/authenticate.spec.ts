import { expect, test, describe, it, beforeEach } from 'vitest'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { compare, hash } from 'bcryptjs'
import { AuthenticateUseCase } from '@/use-cases/authenticate'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { InvalidPasswordError } from '@/use-cases/errors/invalid-password-error'

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'test@example.com',
      password_hash: await hash('123456', 10),
    })

    const { user } = await sut.execute({
      email: 'test@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'test@test.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'test@test.com',
      password_hash: await hash('123456', 10),
    })

    await expect(() =>
      sut.execute({
        email: 'test@test.com',
        password: '123458',
      }),
    ).rejects.toBeInstanceOf(InvalidPasswordError)
  })
})
