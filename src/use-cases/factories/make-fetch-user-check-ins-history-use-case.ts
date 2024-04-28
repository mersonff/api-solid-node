import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from '@/use-cases/fetch-user-check-ins-history'

export function MakeFetchUserCheckInsHistoryUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInRepository()
  return new FetchUserCheckInsHistoryUseCase(prismaCheckInsRepository)
}
