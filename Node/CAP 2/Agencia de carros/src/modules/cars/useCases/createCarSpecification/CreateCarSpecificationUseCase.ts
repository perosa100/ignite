import { injectable, inject } from 'tsyringe'

import { AppError } from '../../../../shared/error/AppError'
import { Car } from '../../infra/typeorm/entities/Car'
import { ICarsRepository } from '../../repositories/ICarsRepository'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

interface IRequest {
  car_id: string
  specifications_id: string[]
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
    @inject('SpecificationsRepository')
    private ISpecificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id)

    if (!carExists) {
      throw new AppError('Carro não existe')
    }

    const specifications = await this.ISpecificationsRepository.findByIds(
      specifications_id
    )

    carExists.specifications = specifications

    await this.carsRepository.create(carExists)

    return carExists
  }
}

export { CreateCarSpecificationUseCase }
