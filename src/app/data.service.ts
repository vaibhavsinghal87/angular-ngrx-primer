import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.employeesUrl);
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

  update(hero: any): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
        .put(url, JSON.stringify(hero), { headers: this.headers })
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } */
}

