import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileUseCase } from '@/use-cases/get-user-profile'

export function MakeGetUserProfileUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  return new GetUserProfileUseCase(prismaUsersRepository)
}
