import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeViewEditComponent } from './components/employee-view-edit/employee-view-edit.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmployeeFormComponent,
    EmployeeViewEditComponent,
    EmployeesListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
