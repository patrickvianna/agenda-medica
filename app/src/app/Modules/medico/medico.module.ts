import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociarMedicoComponent } from './associar-medico/associar-medico.component';
import { MedicoComponent } from './medico.component';
import { Routes, RouterModule } from '@angular/router';
import { MatAutocompleteModule, MatDividerModule, MatSelectModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'associar-medico', component: AssociarMedicoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [AssociarMedicoComponent, MedicoComponent]
})
export class MedicoModule { }
