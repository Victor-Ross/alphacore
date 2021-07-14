import { Request, Response } from 'express';
import { CriarUsuarioServico } from '../../servicos/criarUsuarioServico';

class CriarUsuarioControlador {
  async gerir(request: Request, response: Response) {
    
    const { nome, login, senha, setor_usuario } = request.body;

    const criarUsuarioServico = new CriarUsuarioServico();

    const usuario = await criarUsuarioServico.executar({ nome, login, senha, setor_usuario });

    return response.json(usuario);
  }
}

export { CriarUsuarioControlador };