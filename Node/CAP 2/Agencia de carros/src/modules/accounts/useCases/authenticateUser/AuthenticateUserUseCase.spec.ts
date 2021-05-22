import { AppError } from '../../../../shared/error/AppError'
import { ICreateUsersDTO } from '../../dtos/ICreateUsersDTO'
import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

let userRepositoryInMemory: UserRepositoryInMemory
let authenticateUserUseCase: AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase
describe('Authenticate User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    )
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
  })
  it('should be able to authenticate an user', async () => {
    const user: ICreateUsersDTO = {
      driver_license: '000111',
      email: 'teste@teste.com',
      password: '123',
      name: 'Teste',
      username: 'teste'
    }

    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })
    expect(result).toHaveProperty('token')
  })

  it('should not be able to authenticate not exists user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'pp@pp.com',
        password: '123'
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with incorrect password', async () => {
    expect(async () => {
      const user: ICreateUsersDTO = {
        driver_license: '000111',
        email: 'teste@teste.com',
        password: '123',
        name: 'Teste',
        username: 'teste'
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: user.email,
        password: '12333'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
