import { Repository, getRepository } from 'typeorm'

import { ICreateRenalDTO } from '../dtos/ICreateRenalDTO'
import { Rental } from '../infra/typeorm/entities/Rental'
import { IRentalsRepository } from '../infra/typeorm/repositories/IRentalsRepository'

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>

  constructor() {
    this.repository = getRepository(Rental)
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOne({ car_id })
    return openByCar
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOne({ user_id })
    return openByUser
  }

  async create({
    car_id,
    expect_return_date,
    user_id
  }: ICreateRenalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expect_return_date,
      user_id
    })

    await this.repository.save(rental)

    return rental
  }
}

export { RentalsRepository }
