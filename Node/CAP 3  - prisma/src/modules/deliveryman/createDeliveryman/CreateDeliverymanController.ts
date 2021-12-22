import { Request, Response } from 'express'

import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase'

interface IAuthenticateClient {
  username: string
  password: string
}

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { password, username } = <IAuthenticateClient>request.body

    const createDeliverymanUseCase = new CreateDeliverymanUseCase()
    const result = await createDeliverymanUseCase.execute({
      password,
      username
    })

    return response.json(result)
  }
}
