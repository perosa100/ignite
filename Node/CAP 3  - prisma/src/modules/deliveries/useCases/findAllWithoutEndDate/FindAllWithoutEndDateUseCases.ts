import { prisma } from 'src/database/prismaClient'

export class FindAllWithoutEndDateUseCases {
  async execute() {
    const delivery = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null
      }
    })
    return delivery
  }
}
