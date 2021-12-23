import { prisma } from 'src/database/prismaClient'

interface ICreateDeliveries {
  item_name: string
  id_client: string
}
export class CreateDeliveriesUseCases {
  async execute({ id_client, item_name }: ICreateDeliveries) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client
      }
    })
    return delivery
  }
}
