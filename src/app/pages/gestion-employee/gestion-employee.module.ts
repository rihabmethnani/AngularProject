import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';
import { GestionEmployeeComponent } from './gestion-employee.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentService } from 'src/app/services/department.service';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    GestionEmployeeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers:[ EmployeeService, DepartmentService]
})
export class GestionEmployeeModule {
 
 }
