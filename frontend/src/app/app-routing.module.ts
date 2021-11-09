import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeViewEditComponent } from './components/employee-view-edit/employee-view-edit.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';

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
  /*{
    path:'',
    redirectTo:'/employees',
    pathMatch: 'full'
  },*/


  //Office component
  {
    path:'employees/:id/task-list',
    component:TaskListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
