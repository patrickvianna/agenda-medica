import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Consulta } from 'src/app/core';
import { ConsultaProvider } from 'src/app/Services/consulta';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit {

  consultas: Consulta[] = [];

  constructor(private provider: ConsultaProvider, private toast: ToastrService) {
  }

  displayedColumns: string[] = ['data', 'horario', 'medico', 'paciente', 'situacao', 'acoes'];

  ngOnInit() {
    this.carregarconsultas();
  }

  carregarconsultas() {
    this.consultas = [];
    this.provider.all().then(result => {
      this.consultas = result.reverse();
      console.log('this.consultas :', this.consultas);
    });
  }

  getSituacao(situacao) {
    switch (situacao) {
      case 0: return 'Agendado';
      case 1: return 'Realizado';
      case 2: return 'Cancelado';
    }
  }

  updateSituacao(consulta, situacao) {
    const newConsulta: any = Object.assign({}, consulta);
    newConsulta.situacao = situacao;
    this.provider.update(this.toApi(newConsulta)).then(result => {
      consulta.situacao = situacao;
      this.toast.success('Operação realizada com sucesso!');
      console.log(result);
    }).catch(err => {
      this.toast.success('Ocorreu algum problema!');
      console.log(err);
    });
  }

  toApi(model) {
    console.log(model);
    const newModel = Object.assign({}, model);
    if (typeof newModel.horario !== 'string') {
      newModel.horario = new Date(newModel.horario).getHours() + ':00';
    }
    newModel.consultorio = '5b98ff097937650a2622def0';
    newModel.medico = newModel.medico.id ? newModel.medico.id : '5b9d19c5ffe5fe00169b21a3';
    newModel.paciente = newModel.paciente.id;
    return newModel;
  }

}
