import { Request, Response } from 'express'

import { UpdateEndDateUseCases } from './UpdateEndDateUseCases'

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request
    const { id: id_delivery } = request.params

    const updateEndDateUseCases = new UpdateEndDateUseCases()
    const result = await updateEndDateUseCases.execute({
      id_delivery,
      id_deliveryman
    })

    return response.json(result)
  }
}
