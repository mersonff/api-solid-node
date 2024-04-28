import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsUseCase } from '@/use-cases/fetch-nearby-gyms'

export function MakeFetchNearbyGymsUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository()
  return new FetchNearbyGymsUseCase(prismaGymsRepository)
}
