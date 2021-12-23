import { prisma } from '@src/database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })
    if (!deliveryman) {
      throw new Error('Usuario ou senha invalida')
    }

    const passwordMatch = await compare(password, deliveryman.password)
    if (!passwordMatch) {
      throw new Error('Usuario ou senha invalida')
    }

    const token = sign({ username }, '123123asda', {
      subject: deliveryman.id,
      expiresIn: '1d'
    })

    return token
  }
}
