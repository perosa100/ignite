import { ICreateRenalDTO } from '../../../dtos/ICreateRenalDTO'
import { Rental } from '../entities/Rental'

interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>
  findOpenRentalByUser(user_id: string): Promise<Rental>
  create({
    car_id,
    expect_return_date,
    user_id
  }: ICreateRenalDTO): Promise<Rental>
}

export { IRentalsRepository }
