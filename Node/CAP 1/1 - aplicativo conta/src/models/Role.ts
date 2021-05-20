import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('roles')
class Role {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Role }
