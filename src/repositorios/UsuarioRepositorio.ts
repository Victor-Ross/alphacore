import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from '../entities/Usuario';


@EntityRepository(Usuario)
class UsuarioRepositorio extends Repository<Usuario> {

}

export { UsuarioRepositorio };