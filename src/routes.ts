import { Router } from 'express';
const routes = Router();

import { CriarSetorControlador } from './controladores/setores/criarSetorControlador';
import { CriarUsuarioControlador } from './controladores/users/criarUsuarioControlador';

const criarSetorControlador = new CriarSetorControlador();
const criarUsuarioControlador = new CriarUsuarioControlador();

routes.post('/usuarios', criarUsuarioControlador.gerir);

routes.post('/setores', criarSetorControlador.gerir);


export { routes };