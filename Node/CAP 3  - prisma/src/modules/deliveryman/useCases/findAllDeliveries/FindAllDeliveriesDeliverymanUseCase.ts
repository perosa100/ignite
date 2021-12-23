import { prisma } from '@src/database/prismaClient'

interface IFindAllDeliveriesDeliverymanUseCase {
  id_deliveryman: string
}

export class FindAllDeliveriesDeliverymanUseCase {
  async execute({ id_deliveryman }: IFindAllDeliveriesDeliverymanUseCase) {
    const result = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      }
    })
    return result
  }
}
