import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,  } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity({ name: 'setores' })
class Setor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Setor };