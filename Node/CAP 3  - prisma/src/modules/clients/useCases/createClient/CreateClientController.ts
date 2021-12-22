import { Request, Response } from 'express'

import { CreateClientUseCase } from './CreateClientUseCase'

interface IAuthenticateClient {
  username: string
  password: string
}

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { password, username } = <IAuthenticateClient>request.body

    const createClientUsesCases = new CreateClientUseCase()
    const result = await createClientUsesCases.execute({
      password,
      username
    })

    return response.json(result)
  }
}
