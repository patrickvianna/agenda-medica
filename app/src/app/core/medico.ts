import { Consultorio } from './consultorio';
import { Consulta } from './consulta';

export class Medico {

  id: string;
  nome: string;
  tipo: string;
  email: string;
  senha: string;
  dataNascimento: string;
  cpf: string;
  rg: string;
  numeroCRM: string;
  dataInscricaoCRM: string;
  especialidade: Array<string>;
  consultas: Array<Consulta>;
  consultorios: Array<Consultorio>;

  constructor (consultorio: string = '') {
   }
}
