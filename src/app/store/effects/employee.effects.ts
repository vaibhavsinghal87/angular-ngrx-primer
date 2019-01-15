import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as EmployeeActions from '../actions/employee.actions';
import { Employee } from 'src/app/employee';
import { DataService } from '../../data.service';


@Injectable()
export class EmployeeEffects {
    @Effect()
    fetch$: Observable<Action> = this.actions$.pipe(
        ofType<EmployeeActions.Fetch>(EmployeeActions.ActionTypes.Fetch),
        mergeMap(action =>
            this.http.get('/api/employees').pipe(
                // If successful, dispatch success action with result
                map(data => ({ type: EmployeeActions.ActionTypes.EmployeeLoadSuccess, payload: data }),
                    // If request fails, dispatch failed action
                    catchError(() => {
                        console.log('err');
                        return of({ type: EmployeeActions.ActionTypes.EmployeeLoadFail })
                    })
                )
            )
        ));

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType<EmployeeActions.Delete>(EmployeeActions.ActionTypes.Delete),
        mergeMap((action) =>
            this.dataService.delete(action.payload).pipe(
                map(response => {
                    return ({ type: EmployeeActions.ActionTypes.Fetch })
                })
            ))
    );

    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType<EmployeeActions.Update>(EmployeeActions.ActionTypes.Update),
        mergeMap(action =>
            this.dataService.updateEmployee(action.payload).pipe(
                map(response => {
                    return ({ type: EmployeeActions.ActionTypes.Fetch })
                })
            ))
    );

    @Effect()
    add$: Observable<Action> = this.actions$.pipe(
        ofType<EmployeeActions.Add>(EmployeeActions.ActionTypes.Add),
        mergeMap(action =>
            this.dataService.addEmployee(action.payload).pipe(
                map(response => {
                    return ({ type: EmployeeActions.ActionTypes.Fetch })
                })
            ))
    );

    constructor(private dataService: DataService, private http: HttpClient, private actions$: Actions, private store: Store<Employee[]>) { }
}