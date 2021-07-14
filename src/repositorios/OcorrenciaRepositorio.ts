import { EntityRepository, Repository } from 'typeorm';
import { Ocorrencia } from '../entities/Ocorrencia';


@EntityRepository(Ocorrencia)
class OcorrenciaRepositorio extends Repository<Ocorrencia> {

}

export { OcorrenciaRepositorio };