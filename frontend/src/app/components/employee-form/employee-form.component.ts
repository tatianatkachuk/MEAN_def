import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private employeeService:EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  createEmployee(
    name:HTMLInputElement,
    position:HTMLInputElement,
    office:HTMLInputElement,
    salary:HTMLInputElement){
      this.employeeService
      .createEmployee(
        name.value,
        position.value,
        office.value,
        salary.value)
      .subscribe(
        res => {
          alert(`${name.value} was created` ),
          this.router.navigate(['/employees/list'])
        },
        err => err
        )
  }

  resetForm(form:HTMLFormElement) {
    if (form) {
      form.reset()
    }
  }

}
