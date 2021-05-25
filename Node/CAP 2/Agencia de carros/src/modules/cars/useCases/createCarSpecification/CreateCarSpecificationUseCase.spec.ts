import { AppError } from '../../../../shared/error/AppError'
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory'
import { SpecificationsRepositoryInMemory } from '../../repositories/in-memory/SpecificationsRepositoryInMemory'
import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase'

let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory()

    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    )
  })

  it('should not to ble able to add a new specification to the car', async () => {
    const car_id = '1234'
    const specifications_id = ['54321']

    expect(async () => {
      await createCarSpecificationUseCase.execute({ car_id, specifications_id })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should to ble able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Pegeout',
      description: 'Rapidos',
      daily_rate: 5,
      license_plate: 'ACB-1234',
      fine_amount: 2,
      brand: 'Brand',
      category_id: 'category_id'
    })

    const specification = await specificationsRepositoryInMemory.create({
      description: 'test',
      name: 'test'
    })

    const specifications_id = [specification.id]

    const specificationCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id
    })
    console.log(specificationCars)

    expect(specificationCars).toHaveProperty('specifications')
    expect(specificationCars.specifications.length).toBe(1)
  })
})
