import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      {
        path:'departments',
        loadChildren: ()=> import("./gestion-department/gestion-department.module").then(p=>p.GestionDepartmentModule)
      }
    ]
},
{
  path:'',
  component: PagesComponent,
  children:[
    {
      path:'employees',
      loadChildren: ()=> import("./gestion-employee/gestion-employee.module").then(p=>p.GestionEmployeeModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
