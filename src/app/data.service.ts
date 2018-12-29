import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class DataService {

  employeeData: Employee;
  private headersUrl = 'api/headers';
  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) {
  }

  getHeaders(): Observable<any> {
    return this.http.get(this.headersUrl);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.employeesUrl, emp);
  }

  delete(id: number): Observable<Employee> {
    let url = this.employeesUrl + '/' + id;
    return this.http.delete<Employee>(url);
  }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, emp);
  }
}

