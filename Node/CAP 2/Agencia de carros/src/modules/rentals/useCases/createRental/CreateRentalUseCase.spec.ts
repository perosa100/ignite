import dayjs from 'dayjs'

import { DayjsDateProvider } from '../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider'
import { AppError } from '../../../../shared/error/AppError'
import { RentalsRepositoryInMemomy } from '../../infra/typeorm/repositories/in-memory/RentalsRepositoryInMemomy'
import { CreateRentalUseCase } from './CreateRentalUseCase'

let createRentalUseCase: CreateRentalUseCase
let rentalsRepositoryInMemomy: RentalsRepositoryInMemomy
let dayjsDateProvider: DayjsDateProvider

describe('Create Rental', () => {
  const dayAdd24hours = dayjs().add(1, 'day').toDate()

  beforeEach(() => {
    rentalsRepositoryInMemomy = new RentalsRepositoryInMemomy()
    dayjsDateProvider = new DayjsDateProvider()
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemomy,
      dayjsDateProvider
    )
  })

  it('should be able to create a new rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '12345',
      car_id: '121212',
      expect_return_date: dayAdd24hours
    })

    expect(rental).toHaveProperty('id')
    expect(rental).toHaveProperty('start_date')
  })

  it('should not be able to create a new rental if there is open to the sammer user', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        expect_return_date: dayAdd24hours
      })

      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        expect_return_date: dayAdd24hours
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new rental if there is open to the sammer car', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '121212',
        expect_return_date: dayAdd24hours
      })

      await createRentalUseCase.execute({
        user_id: '321',
        car_id: '121212',
        expect_return_date: dayAdd24hours
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new rental min 24 hours', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '121212',
        expect_return_date: dayjs().toDate()
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
