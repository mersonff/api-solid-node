import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInUseCase } from '@/use-cases/validate-check-in'

export function MakeValidateCheckInUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInRepository()
  return new ValidateCheckInUseCase(prismaCheckInsRepository)
}
