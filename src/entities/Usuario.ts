import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  UpdateDateColumn, 
  CreateDateColumn, 
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Setor } from './Setor';

@Entity({ name: 'usuarios' })
class Usuario {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  setor_usuario: string;

  @JoinColumn({ name: 'setor_usuario' })
  @ManyToOne(() => Setor)
  setor: Setor;

  @Column()
  admin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { Usuario };