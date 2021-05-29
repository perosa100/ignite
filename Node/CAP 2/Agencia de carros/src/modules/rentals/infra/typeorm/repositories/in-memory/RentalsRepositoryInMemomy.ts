import { ICreateRenalDTO } from '../../../../dtos/ICreateRenalDTO'
import { Rental } from '../../entities/Rental'
import { IRentalsRepository } from '../IRentalsRepository'

class RentalsRepositoryInMemomy implements IRentalsRepository {
  rentals: Rental[] = []

  async create({
    car_id,
    expect_return_date,
    user_id
  }: ICreateRenalDTO): Promise<Rental> {
    const rental = new Rental()

    Object.assign(rental, {
      car_id,
      expect_return_date,
      user_id,
      start_date: new Date()
    })

    this.rentals.push(rental)

    return rental
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.rentals.find(
      (rental) => rental.car_id === car_id && !rental.end_date
    )
  }
  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.rentals.find(
      (rental) => rental.user_id === user_id && !rental.end_date
    )
  }
}

export { RentalsRepositoryInMemomy }
