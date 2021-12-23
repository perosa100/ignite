import { Request, Response } from 'express'

import { CreateDeliveriesUseCases } from './CreateDeliveriesUseCases'

interface ICreateDeliveries {
  item_name: string
  id_client: string
}
export class CreateDeliveriesController {
  async handle(request: Request, response: Response) {
    const { item_name } = <ICreateDeliveries>request.body
    const { id_client } = request

    const createDeliveriesUseCases = new CreateDeliveriesUseCases()
    const result = await createDeliveriesUseCases.execute({
      item_name,
      id_client
    })

    return response.json(result)
  }
}
