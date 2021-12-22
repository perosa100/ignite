import { prisma } from '@src/database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })
    if (!client) {
      throw new Error('Usuario ou senha invalida')
    }

    const passwordMatch = await compare(password, client.password)
    if (!passwordMatch) {
      throw new Error('Usuario ou senha invalida')
    }

    const token = sign({ username }, '123123asda', {
      subject: client.id,
      expiresIn: '1d'
    })

    return token
  }
}
