import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('cars')
class Car {
  @PrimaryColumn()
  id?: string

  @Column()
  name

  @Column()
  description

  daily_rate

  available

  license_plate

  fine_amount

  brand

  category_id

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Car }
