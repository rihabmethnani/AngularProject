import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';
import { GestionEmployeeComponent } from './gestion-employee.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    GestionEmployeeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeeRoutingModule
  ]
})
export class GestionEmployeeModule { }
