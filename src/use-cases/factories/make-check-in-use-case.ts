import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { CheckInUseCase } from '@/use-cases/check-in'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function MakeCheckInUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInRepository()
  const prismaGymsRepository = new PrismaGymsRepository()
  return new CheckInUseCase(prismaCheckInsRepository, prismaGymsRepository)
}
