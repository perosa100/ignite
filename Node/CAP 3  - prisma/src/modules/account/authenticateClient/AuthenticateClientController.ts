import { Request, Response } from 'express'

import { AuthenticateClientUseCase } from './AuthenticateClientUseCase'

interface ICreateClient {
  username: string
  password: string
}

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { password, username } = <ICreateClient>request.body

    const authenticateClientUseCase = new AuthenticateClientUseCase()
    const result = await authenticateClientUseCase.execute({
      password,
      username
    })

    return response.json(result)
  }
}
