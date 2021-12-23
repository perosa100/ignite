import { prisma } from 'src/database/prismaClient'

interface IFindAllDeliveries {
  id_client: string
}

export class FindAllDeliveriesClientUseCase {
  async execute({ id_client }: IFindAllDeliveries) {
    const result = await prisma.clients.findMany({
      where: {
        id: id_client
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
