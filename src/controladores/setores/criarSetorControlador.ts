import { Request, Response } from 'express';
import { CriarSetorServico } from '../../servicos/criarSetorServico';

class CriarSetorControlador {
  async gerir(request: Request, response: Response) {
    const { nome } = request.body;

    const criarSetorServico = new CriarSetorServico();

    const setor = await criarSetorServico.executar({ nome });

    return response.json(setor);
  }
}

export { CriarSetorControlador };