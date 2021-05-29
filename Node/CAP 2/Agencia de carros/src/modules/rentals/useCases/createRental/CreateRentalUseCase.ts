import { injectable, inject } from 'tsyringe'

import { IDateProvider } from '../../../../shared/container/providers/DateProvider/IDateProvider'
import { AppError } from '../../../../shared/error/AppError'
import { Rental } from '../../infra/typeorm/entities/Rental'
import { IRentalsRepository } from '../../infra/typeorm/repositories/IRentalsRepository'

interface IRequest {
  user_id: string
  car_id: string
  expect_return_date: Date
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider
  ) {}
  async execute({
    car_id,
    expect_return_date,
    user_id
  }: IRequest): Promise<Rental> {
    const min24Hours = 24
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    )

    if (carUnavailable) {
      throw new AppError('Carro não esta disponivel')
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    )

    if (rentalOpenToUser) {
      throw new AppError('Aluguel ja em progresso para usuario')
    }

    const dateNow = this.dateProvider.dateNow()
    const compare = this.dateProvider.compareInHours(
      dateNow,
      expect_return_date
    )

    if (compare < min24Hours) {
      throw new AppError('Horario minimo de 24 horas')
    }

    const rental = await this.rentalsRepository.create({
      car_id,
      expect_return_date,
      user_id
    })

    return rental
  }
}

export { CreateRentalUseCase }
