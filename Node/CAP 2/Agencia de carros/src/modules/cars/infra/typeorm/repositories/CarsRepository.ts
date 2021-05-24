import { Repository, getRepository } from 'typeorm'

import { ICreateCarDTO } from '../../../dtos/ICreateCarDTO'
import { ICarsRepository } from '../../../repositories/ICarsRepository'
import { Car } from '../entities/Car'

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }

  async create({
    name,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    brand
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      brand
    })

    await this.repository.save(car)

    return car
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate })
    return car
  }
}
export { CarsRepository }
