import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class DataService {

  employeeData: Employee;
  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.employeesUrl)
      .pipe(
        map(res => {
          this.employeeData = res;
          return this.employeeData;
        })
      );
  }

  updateEmployee(emp): Observable<Object[]> {
    let len = this.employeeData.rows.length;
    for (let i = 0; i < len; i++) {
      let item = this.employeeData.rows[i] as any;
      if (emp.id === item.id) {
        this.employeeData.rows[i] = emp;
      }
    }
    return of(this.employeeData.rows);
    //return this.http.post('commands/resetDb', emp);
    /* return this.http.put(this.employeesUrl, { id: 1 }, httpOptions).pipe(
      map(() => console.log('www')),
      tap(_ => console.log('tap'))
    ); */
  }

  delete(id: number): Observable<Object[]> {
    this.employeeData.rows = this.employeeData.rows.filter(item => {
      return item['id'] !== id;
    });
    return of(this.employeeData.rows);
  }

  addEmployee(emp) {
    this.employeeData.rows.push(emp);
    return of(this.employeeData.rows);
  }
}

