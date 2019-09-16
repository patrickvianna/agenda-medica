import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { Consulta, Paciente } from 'src/app/core';
import { ConsultaProvider } from 'src/app/Services/consulta';
import { PacienteProvider } from 'src/app/Services/paciente';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.component.html',
  styleUrls: ['./criar-consulta.component.css']
})
export class CriarConsultaComponent implements OnInit {

  Ctrl = new FormControl();
  filteredPacientes: Observable<Paciente[]>;

  pacientes: Paciente[] = [];
  consulta = new Consulta();


  constructor(private consultaProvider: ConsultaProvider, private pacienteProvider: PacienteProvider, private toast: ToastrService, private router: Router) {

    pacienteProvider.all().then(result => {
      this.pacientes = result;
      console.log('result :', result);
    }).catch(result => {
      console.log('result :', result);
    });

    this.filteredPacientes = this.Ctrl.valueChanges
      .pipe(
        startWith(''),
        map(paciente => paciente ? this._filterPacientes(paciente) : this.pacientes.slice())
      );
  }

  ngOnInit() {
  }

  cadastrarConsulta() {
    this.consultaProvider.add(this.consulta).then (result => {
      this.toast.success('Consulta realizada com sucesso!', 'Sucesso!');
      console.log('result :', result);
      this.router.navigate(['consulta/']);
    }) .catch(result => {
      this.toast.error('Houve algum problema...', 'Erro!');
      console.log('result :', result);
    });
    console.log('consulta :', this.consulta);
  }

  private _filterPacientes(value: string): Paciente[] {
    const filterValue = value.toLowerCase();

    return this.pacientes.filter(paciente => paciente.nome.toLowerCase().indexOf(filterValue) === 0);
  }
}
