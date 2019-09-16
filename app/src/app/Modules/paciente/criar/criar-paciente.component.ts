import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

import { Paciente } from 'src/app/core';
import { PacienteProvider } from 'src/app/Services/paciente';

@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.css']
})
export class CriarPacienteComponent implements OnInit {

  Ctrl = new FormControl();
  hide = true;
  paciente = new Paciente();
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  public contactFormGroup: FormGroup;
  constructor(private pacienteProvider: PacienteProvider, private toast: ToastrService, private router: Router) { }

  
  cadastrar() {
    console.log('Paciente :', this.paciente);
    
    this.pacienteProvider.add(this.paciente).then(result => {
      this.toast.success('Paciente criado!', 'Sucesso!');
      this.router.navigate(['consulta/']);
      console.log('result :', result);
    }).catch(result => {
      this.toast.error('Não foi possível criar paciente', 'Erro');
      console.log('result :', result);
    });
  }

  ngOnInit() {
  }


}
