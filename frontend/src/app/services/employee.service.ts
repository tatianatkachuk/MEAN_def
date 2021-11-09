import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Employee} from '../models/Employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URI = 'http://localhost:4000/api/employees'

  constructor(private http: HttpClient) {  }

  createEmployee(
    name:string,
    position:string,
    office:string,
    salary:string) {
    const form = new FormData();
    form.append('name', name);
    form.append('position', position);
    form.append('office', office);
    form.append('salary', salary);
    return this.http.post(this.URI, form);
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.URI);
  }

  getEmployee(_id: string) {
    return this.http.get<Employee>(`${this.URI}/${_id}`);
  }

  getId(
    _id: string,
    name:string,
    position:string,
    office:string,
    salary:string){
    const res = this.http.get<Employee>(`${this.URI}/${_id}`);
    return res
  }

  deleteEmployee(_id: string) {
    return this.http.delete(`${this.URI}/${_id}`);
  }

  updateEmployee(
    _id: string,
    name:string,
    position:string,
    office:string,
    salary:string) {
    return this.http.put(`${this.URI}/${_id}`, {name,position,office,salary});
  }

}
