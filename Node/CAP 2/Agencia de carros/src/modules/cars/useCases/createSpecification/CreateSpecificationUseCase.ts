import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../error/AppError'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExist = await this.specificationsRepository.findByName(
      name
    )

    if (specificationAlreadyExist) {
      throw new AppError('Especificacao ja existe')
    }

    await this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
