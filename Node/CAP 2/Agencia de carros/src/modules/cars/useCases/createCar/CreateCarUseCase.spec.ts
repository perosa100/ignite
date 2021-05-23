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
    const car = {
      name: 'Pegeout',
      description: 'Rapidos',
      daily_rate: 5,
      available: true,
      license_plate: 'ACB-1234',
      fine_amount: 2,
      brand: 'Brand',
      category_id: 'category_id'
    }
    await createCarUseCase.execute(car)
  })
})
