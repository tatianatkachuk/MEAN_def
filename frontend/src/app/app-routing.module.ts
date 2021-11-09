import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeViewEditComponent } from './components/employee-view-edit/employee-view-edit.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [
  {
    path:'employees/list',
    component: EmployeesListComponent
  },
  {
    path:'employees/new',
    component: EmployeeFormComponent
  },
  {
    path:'employees/:id',
    component: EmployeeViewEditComponent
  },
  {
    path:'',
    redirectTo:'/employees',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
