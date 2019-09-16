import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultorioLoginComponent } from './Modules/consultorio-login/consultorio-login.component';
import { AppModule } from './app.module';

const routes: Routes = [
  //  path: '',
  //  component: ConsultorioLoginComponent,
  //  children: [
      { path: '', redirectTo: '/login-consultorio', pathMatch: 'full' },
     // { path: 'login-consultorio', component: ConsultorioLoginComponent },
      { path: 'login-consultorio', loadChildren: './Modules/consultorio-login/consultorio-login.module#ConsultorioLoginModule' },
      { path: 'consultorio', loadChildren: './Modules/consultorio/consultorio.module#ConsultorioModule' },
      { path: 'consulta', loadChildren: './Modules/consulta/consulta.module#ConsultaModule' },
      { path: 'paciente', loadChildren: './Modules/paciente/paciente.module#PacienteModule' }
  //  ]

  ,
 /* { path: '', redirectTo: '/login-consultorio', pathMatch: 'full' },
  { path: 'login-consultorio', component: ConsultorioLoginComponent },
  { path: 'registro-consultorio', component: FormRegistroConsultorioComponent },
  { path: 'consultorio', module: FormRegistroConsultorioComponent },
*/ //  { path: '**', pathMatch: 'full', redirectTo: '/new-messages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
