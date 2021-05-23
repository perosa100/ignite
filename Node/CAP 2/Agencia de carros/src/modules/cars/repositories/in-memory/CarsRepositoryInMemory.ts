import { ICreateCarDTO } from '../../dtos/ICreateCarDTO'
import { Car } from '../../entities/Car'
import { ICarsRepository } from '../ICarsRepository'

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []

  create(data: ICreateCarDTO): Promise<void> {
    const category = new 
  }
}

export { CarsRepositoryInMemory }
