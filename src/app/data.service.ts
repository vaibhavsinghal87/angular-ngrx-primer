import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class DataService {

  employeeData: Object;
  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.employeesUrl)
      .pipe(
        map(res => {
          this.employeeData = res;
          return this.employeeData;
        })
      );
  }

  updateEmployee(emp) {
    let len = this.employeeData.rowData.length;
    for (let i = 0; i < len; i++) {
      if (emp.id === this.employeeData.rowData[i].id) {
        this.employeeData.rowData[i] = emp;
      }
    }
    return of(this.employeeData.rowData);
    //return this.http.post('commands/resetDb', emp);
    /* return this.http.put(this.employeesUrl, { id: 1 }, httpOptions).pipe(
      map(() => console.log('www')),
      tap(_ => console.log('tap'))
    ); */
  }

  /* 
    getHero(id: number): Promise<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Hero)
          .catch(this.handleError);
    }
  
    delete(id: number): Promise<void> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.delete(url, { headers: this.headers })
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
    }
  
    create(name: string): Promise<Hero> {
      return this.http
          .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
          .toPromise()
          .then(res => res.json().data as Hero)
          .catch(this.handleError);
    }
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    } */
}

