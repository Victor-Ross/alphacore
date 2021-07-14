import { getCustomRepository } from 'typeorm';
import { UsuarioRepositorio } from '../repositorios/UsuarioRepositorio';


type UsuarioTipo = {
  nome: string;
  login: string;
  senha: string;
  setor_usuario: string;
}

class CriarUsuarioServico {
  async executar({ nome, login, senha, setor_usuario }: UsuarioTipo) {
    const usuarioRepositorio = getCustomRepository(UsuarioRepositorio);

    const usuarioJaExiste = await usuarioRepositorio.findOne({ login });

    if(usuarioJaExiste) {
      throw new Error('Usuario já existente');
    }

    
    const usuario = usuarioRepositorio.create({
      nome, login, senha, setor_usuario
    });

    await usuarioRepositorio.save(usuario);

    return usuario;
  }
}

export { CriarUsuarioServico };