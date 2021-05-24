import { AppError } from '../../../../shared/error/AppError'
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory'
import { CreateCarUseCase } from './CreateCarUseCase'

describe('Create Car', () => {
  let createCarUseCase: CreateCarUseCase
  let carsRepositoryInMemory: CarsRepositoryInMemory

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })

  it('should be able create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Pegeout',
      description: 'Rapidos',
      daily_rate: 5,
      license_plate: 'ACB-1234',
      fine_amount: 2,
      brand: 'Brand',
      category_id: 'category_id'
    })

    expect(car).toHaveProperty('id')
  })

  it('should not be able create a car with exists license plate', async () => {
    expect(async () => {
      const car = {
        name: 'Pegeout',
        description: 'Rapidos',
        daily_rate: 5,
        license_plate: 'ACB-1234',
        fine_amount: 2,
        brand: 'Brand',
        category_id: 'category_id'
      }
      await createCarUseCase.execute(car)
      await createCarUseCase.execute(car)
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able create a car with avalilable true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Pegeout',
      description: 'Rapidos',
      daily_rate: 5,
      license_plate: 'ACB-1234',
      fine_amount: 2,
      brand: 'Brand',
      category_id: 'category_id'
    })

    expect(car.available).toBeTruthy()
  })
})
