import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { GetUserMetricsUseCase } from '@/use-cases/get-user-metrics'

export function MakeGetUserMetricsUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInRepository()
  return new GetUserMetricsUseCase(prismaCheckInsRepository)
}
