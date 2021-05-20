import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../error/AppError'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    // usuario existe?
    if (!user) {
      throw new AppError('Email ou senha invalido')
    }

    const passwotdMacth = await compare(password, user.password)
    // senha incorreta?
    if (!passwotdMacth) {
      throw new AppError('Email ou senha invalido')
    }

    // gerar jwt
    const token = sign({}, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: '1d'
    })

    return {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }
  }
}

export { AuthenticateUserUseCase }
