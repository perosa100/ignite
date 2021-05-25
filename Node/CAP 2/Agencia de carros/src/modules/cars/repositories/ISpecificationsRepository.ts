import { Specification } from '../infra/typeorm/entities/Specification'

interface ISpecificationsDTO {
  name: string
  description: string
}
interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>
  findByIds(ids: string[]): Promise<Specification[]>
  create({ name, description }: ISpecificationsDTO): Promise<Specification>
}

export { ISpecificationsRepository, ISpecificationsDTO }
