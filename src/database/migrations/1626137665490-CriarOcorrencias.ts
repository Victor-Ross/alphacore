import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarOcorrencias1626137665490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'ocorrencias',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true
            },
            {
              name: 'linha',
              type: 'integer',
              isNullable: true
            },
            {
              name: 'carro',
              type: 'integer',
              isNullable: true
            },
            {
              name: 'turno',
              type: 'tinyint',
              isNullable: true
            },
            {
              name: 'matricula',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'nome',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'data',
              type: 'timestamp'
            },
            {
              name: 'hora_inicio',
              type: 'timestamp'
            },
            {
              name: 'hora_fim',
              type: 'timestamp'
            },
            {
              name: 'tipo',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'ocorrencia',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'descricao',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'status',
              type: 'varchar',
              default: "'aberta'"
            },
            {
              name: 'local',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'setor_ocorrencia',
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
              name: 'fksetor_da_ocorrencia',
              referencedTableName: 'setores',
              referencedColumnNames: ['id'],
              columnNames: ['setor_ocorrencia']
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('ocorrencias');
    }

}
