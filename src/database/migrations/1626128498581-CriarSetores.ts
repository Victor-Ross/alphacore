import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarSetores1626138498581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'setores',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true
            },
            {
              name: 'nome',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('setores');
    }

}
