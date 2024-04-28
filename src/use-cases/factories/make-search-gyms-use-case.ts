import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymsUseCase } from '@/use-cases/search-gyms'

export function MakeSearchGymsUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository()
  return new SearchGymsUseCase(prismaGymsRepository)
}
