import { EntityRepository, Repository } from 'typeorm';
import { Setor } from '../entities/Setor';


@EntityRepository(Setor)
class SetorRepositorio extends Repository<Setor> {

}

export { SetorRepositorio };