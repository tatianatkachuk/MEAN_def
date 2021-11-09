import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees = [] as any
  _id: string;

  constructor( private employeeService: EmployeeService, private router:Router) {
    this._id=''
   }

  ngOnInit(): void {
    this.employeeService.getEmployees()
    .subscribe(
      res =>{
        this.employees = res
      } ,
      err => console.log(err)
    )
  }

  selectedEmployee(_id:string){
    this._id = _id;
    this.router.navigate(['/employees', _id]);
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


  deleteEmployee(_id:string,name:string,position:string,office:string, salary:string) {
    this.getId(_id,name, position, office, salary)
    this.employeeService.deleteEmployee(_id)
      .subscribe(res => {
        console.log(res)
        //this.router.navigate(['/employees/list']);
      })
  }


  getId(
    _id: string,
    name:string,
    position:string,
    office:string,
    salary:string){
      //this.router.navigate(['/employees', _id]);
      this.employeeService
      .getId(_id,name,position,office,salary)
      .subscribe(
        res => this.selectedEmployee(_id),
        err => err
      )

 }
}
