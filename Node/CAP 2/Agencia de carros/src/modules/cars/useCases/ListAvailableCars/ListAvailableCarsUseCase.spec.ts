import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory'
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase'

let listAvailableCarsUseCase: ListAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    )
  })

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Brand1',
      category_id: '1e1dabe5-b0c3-4772-98dd-daa0e71be282',
      daily_rate: 500,
      description: 'Celta A3',
      fine_amount: 2,
      license_plate: 'des-1234',
      name: 'Celta A3'
    })

    const cars = await listAvailableCarsUseCase.execute({})

    expect(cars).toEqual([car])

    expect(cars).toHaveLength(1)
  })

  it('should be able to list all available by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Brand_car_name',
      category_id: '1e1dabe5-b0c3-4772-98dd-daa0e71be282',
      daily_rate: 500,
      description: 'Celta A3',
      fine_amount: 2,
      license_plate: 'des-1234',
      name: 'Celta A3'
    })

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Brand_car_name'
    })

    expect(cars).toEqual([car])
  })

  it('should be able to list all available by name', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Brand_car_name',
      category_id: '1e1dabe5-b0c3-4772-98dd-daa0e71be282',
      daily_rate: 500,
      description: 'Celta A3',
      fine_amount: 2,
      license_plate: 'des-1234',
      name: 'Name_teste'
    })

    const cars = await listAvailableCarsUseCase.execute({ name: 'Name_teste' })

    expect(cars).toEqual([car])
  })

  it('should be able to list all available by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      brand: 'Brand_car_name',
      category_id: '1e1dabe5-b0c3-4772-98dd-daa0e71be282',
      daily_rate: 500,
      description: 'Celta A3',
      fine_amount: 2,
      license_plate: 'des-1234',
      name: 'Celta A3'
    })

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '1e1dabe5-b0c3-4772-98dd-daa0e71be282'
    })

    expect(cars).toEqual([car])
  })
})
