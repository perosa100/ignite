import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import { ICreateUsersDTO } from '../../dtos/ICreateUsersDTO'
import { IUsersRepository } from '../../repositories/IUsersRepository'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    driver_license,
    email,
    name,
    password,
    username
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error('Email ja existe')
    }

    const hashPassword = await hash(password, 8)
    await this.usersRepository.create({
      driver_license,
      email,
      name,
      password: hashPassword,
      username
    })
  }
}

export { CreateUserUseCase }
