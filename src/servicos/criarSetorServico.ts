import { getCustomRepository } from "typeorm";
import { SetorRepositorio } from "../repositorios/SetorRepositorio";

type SetorTipo = {
  nome: string;
}

class CriarSetorServico {
  async executar({ nome }: SetorTipo) {
    const setorRepositorio = getCustomRepository(SetorRepositorio);

    const setorJaExistente = await setorRepositorio.findOne({ nome });

    if(setorJaExistente) {
      throw new Error('Setor já existe');
    }

    const setor = setorRepositorio.create({
      nome
    });

    setorRepositorio.save(setor);

    return setor;
  }
}

export { CriarSetorServico };