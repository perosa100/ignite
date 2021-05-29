import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm'

export class CreateRentals1621907337144 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rentals',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'car_id',
            type: 'uuid'
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'start_date',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'end_date',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'expect_return_date',
            type: 'timestamp'
          },
          {
            name: 'total',
            type: 'numeric',
            isNullable: true
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
    await queryRunner.createForeignKey(
      'rentals',
      new TableForeignKey({
        name: 'FK_Car_Rental',
        referencedTableName: 'cars',
        referencedColumnNames: ['id'],
        columnNames: ['car_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      })
    )
    await queryRunner.createForeignKey(
      'rentals',
      new TableForeignKey({
        name: 'FK_User_Rental',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('rentals', 'FK_Car_Rental')
    await queryRunner.dropForeignKey('rentals', 'FK_User_Rental')
    await queryRunner.dropTable('rentals')
  }
}
