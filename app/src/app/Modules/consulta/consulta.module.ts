import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material';
import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule } from '@angular/material';
import { MatInputModule, MatIconModule, MatButtonModule, MatDividerModule, MatSelectModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpModule } from '@angular/http';

import { ConsultaComponent } from './consulta.component';
import { ListarConsultaComponent } from './listar/listar-consulta.component';
import { CriarConsultaComponent } from './criar/criar-consulta.component';
import { EditarConsultaComponent } from './editar/editar-consulta.component';
import { ConsultaProvider } from '../../Services/consulta';
import { PacienteProvider } from '../../Services/paciente';
import { BaseProvider } from '../../Services/baseProvider';

const routes: Routes = [
  { path: '', component: ListarConsultaComponent },
  { path: 'cadastrar', component: CriarConsultaComponent },
  { path: 'editar', component: EditarConsultaComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    NgbTimepickerModule,
    MatTableModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  providers: [
    ConsultaProvider,
    PacienteProvider,
    BaseProvider,
    ToastrService
  ],
  declarations: [CriarConsultaComponent, EditarConsultaComponent, ListarConsultaComponent, ConsultaComponent]
})
export class ConsultaModule { }
