import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/error/AppError'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExist = await this.categoriesRepository.findByName(
      name
    )

    if (categoryAlreadyExist) {
      throw new AppError('Carro ja existe')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
