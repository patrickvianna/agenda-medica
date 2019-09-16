import { Endereco } from './endereco';
import { Medico } from './medico';

export class Consultorio {

    id: string;
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    endereco: Endereco;
    email: string;
    telefone: string;
    medicos: Medico[];

    constructor() {
      this.endereco = new Endereco();
      this.medicos = [];
    }


}
