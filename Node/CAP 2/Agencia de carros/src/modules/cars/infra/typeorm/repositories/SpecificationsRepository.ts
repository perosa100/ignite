import { Repository, getRepository } from 'typeorm'

import { Specification } from '../../../entities/Specification'
import {
  ISpecificationsRepository,
  ISpecificationsDTO
} from '../../../repositories/ICarsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ name, description }: ISpecificationsDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description
    })

    await this.repository.save(specification)
  }
  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name })
    return specification
  }
}

export { SpecificationsRepository }
