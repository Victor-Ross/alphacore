import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Setor } from './Setor';

@Entity({ name: 'ocorrencias' })
class Ocorrencia {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  linha: number;

  @Column()
  carro: number;

  @Column()
  turno: number;

  @Column()
  matricula: number;

  @Column()
  nome: string;

  @Column()
  data: Date;
  
  @Column()
  horaInicio: Date;

  @Column()
  horaFim: Date;

  @Column()
  tipo: string;

  @Column()
  ocorrencia: string;

  @Column()
  descricao: string;

  @Column()
  status: string;

  @Column()
  local: string;

  @Column()
  setor_ocorrencia: string;

  @JoinColumn({ name: 'setor_ocorrencia' })
  @ManyToOne(() => Setor)
  setor: Setor;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export { Ocorrencia };