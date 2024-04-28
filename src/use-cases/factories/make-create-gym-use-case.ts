import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '@/use-cases/create-gym'

export function MakeCreateGymUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository()
  return new CreateGymUseCase(prismaGymsRepository)
}
