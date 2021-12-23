import { Request, Response } from 'express'

import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase'

interface ICreateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { password, username } = <ICreateDeliveryman>request.body

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()
    const result = await authenticateDeliverymanUseCase.execute({
      password,
      username
    })

    return response.json(result)
  }
}
