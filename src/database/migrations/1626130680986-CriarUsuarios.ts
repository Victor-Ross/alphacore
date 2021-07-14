import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarUsuarios1626130680986 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'usuarios',
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
              name: 'login',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'senha',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'admin',
              type: 'boolean',
              default: false
            },
            {
              name: 'setor_usuario',
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
          ],
          foreignKeys: [
            {
              name: 'fksetor_do_usuario',
              referencedTableName: 'setores',
              referencedColumnNames: ['id'],
              columnNames: ['setor_usuario'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("usuarios");
    }

}
