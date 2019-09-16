import { PacienteProvider } from 'src/app/Services/paciente';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule, MatButtonModule, MatDividerModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatSlideToggleModule } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { HttpModule } from '@angular/http';

import { PacienteComponent } from './paciente.component';
import { ListarPacienteComponent } from './listar/listar-paciente.component';
import { CriarPacienteComponent } from './criar/criar-paciente.component';
import { BaseProvider } from 'src/app/Services/baseProvider';

const routes: Routes = [
  { path: 'cadastrar', component: CriarPacienteComponent },
  // { path: 'editar', component: EditarPacienteComponent },
  { path: '', component: ListarPacienteComponent }

/* { path: '', redirectTo: '/login-paciente', pathMatch: 'full' },
{ path: 'login-paciente', component: PacienteLoginComponent },
{ path: 'registro-paciente', component: FormRegistroPacienteComponent },
{ path: 'paciente', module: FormRegistroPacienteComponent },
*/ //  { path: '**', pathMatch: 'full', redirectTo: '/new-messages' },
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
    MatSlideToggleModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  providers: [
    ToastrService,
    BaseProvider,
    PacienteProvider
  ],
  declarations: [PacienteComponent, ListarPacienteComponent, CriarPacienteComponent]
})
export class PacienteModule { }
