import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/Employee';
import { myTask } from 'src/app/models/myTask';

@Component({
  selector: 'app-employee-view-edit',
  templateUrl: './employee-view-edit.component.html',
  styleUrls: ['./employee-view-edit.component.css']
})
export class EmployeeViewEditComponent implements OnInit {

  id : string;
  employee: Employee | undefined;

  employees: Employee[] = []
  tasks: myTask[] = []

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    private employeeService: EmployeeService) {
      this.id = '';
  }
   updateEmployee(
    _id: HTMLInputElement,
    name:HTMLInputElement,
    position:HTMLInputElement,
    office:HTMLInputElement,
    salary:HTMLInputElement){
      this.router.navigate(['/employees', _id]);
      this.employeeService
      .updateEmployee(
        _id.value,
        name.value,
        position.value,
        office.value,
        salary.value)
      .subscribe(
        res => {
          alert(`${name.value} was updated` ),
          this.router.navigate(['/employees/list'])
        },
        err => err
        )
  }


  deleteEmployee(id:  HTMLInputElement) {
    this.employeeService.deleteEmployee(id.value)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/employees/list']);
      })
  }

  resetForm(form:HTMLFormElement) {
    if (form) {
      form.reset()
    }
  }

  ngOnInit(): void {


    this.activateRoute.params
    .subscribe(
      params => {
        this.id = params[this.id];
        this.employeeService.getEmployee(this.id)
        .subscribe(
          res =>{
            this.employee = res
          },
          err => console.log(err)
        )
      }
    )
  }

}
