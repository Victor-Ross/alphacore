import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';

import { config } from 'dotenv';
config();

import express from 'express';
import './database';

import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

// app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
//   if(err instanceof Error) {
//     return response.status(400).json({
//       error: err.message
//     });
//   }

//   return response.status(500).json({ message: 'Erro interno no servidor' });
// });

app.listen(3333, () => console.log('Rodando'));