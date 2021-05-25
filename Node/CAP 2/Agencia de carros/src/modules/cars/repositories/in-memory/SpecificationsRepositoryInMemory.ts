import { Specification } from '../../infra/typeorm/entities/Specification'
import {
  ISpecificationsDTO,
  ISpecificationsRepository
} from '../ISpecificationsRepository'

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[] = []

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    )
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    return this.specifications.filter((specification) =>
      ids.includes(specification.id)
    )
  }

  async create({
    name,
    description
  }: ISpecificationsDTO): Promise<Specification> {
    const specifications = new Specification()

    Object.assign(specifications, {
      name,
      description
    })

    this.specifications.push(specifications)
    return specifications
  }
}

export { SpecificationsRepositoryInMemory }
