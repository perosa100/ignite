import { Request, Response } from 'express'

import { UpdateDeliverymanDateUseCases } from './UpdateDeliverymanDateUseCases'

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request
    const { id: id_delivery } = request.params

    const updateDeliverymanDateUseCases = new UpdateDeliverymanDateUseCases()
    const result = await updateDeliverymanDateUseCases.execute({
      id_delivery,
      id_deliveryman
    })

    return response.json(result)
  }
}
