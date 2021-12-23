import { Request, Response } from 'express'

import { FindAllWithoutEndDateUseCases } from './FindAllWithoutEndDateUseCases'

export class FindAllWithoutEndDateController {
  async handle(request: Request, response: Response) {
    const findAllWithoutEndDateUseCases = new FindAllWithoutEndDateUseCases()
    const result = await findAllWithoutEndDateUseCases.execute()

    return response.json(result)
  }
}
