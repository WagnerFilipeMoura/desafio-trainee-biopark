import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableAppointments1605231271846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointments',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'date',
              type: 'timestamp with time zone',
              isNullable: false,
            },
            {
              name: 'recipient',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'message',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'state',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments');
    }

}
