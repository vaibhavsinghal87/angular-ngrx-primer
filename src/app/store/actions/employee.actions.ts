import { Action } from '@ngrx/store';

export enum ActionTypes {
  Fetch = '[Employee] Fetch',
  EmployeeLoadSuccess = '[Employee LoadSuccess]',
  EmployeeLoadFail = '[Employee LoadFail]',
  Update = '[Employee] Update',
  Delete = '[Employee] Delete',
  Add = '[Employee] Add'
}

export class Fetch implements Action {
  readonly type = ActionTypes.Fetch;
  payload?: any;
}

export class Update implements Action {
  readonly type = ActionTypes.Update;

  constructor(public payload: any) { }
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;

  constructor(public payload: any) { }
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: any) { }
}

export class EmployeeLoadSuccess implements Action {
  readonly type = ActionTypes.EmployeeLoadSuccess;

  constructor(public payload: any) { }
}

export class EmployeeLoadFail implements Action {
  readonly type = ActionTypes.EmployeeLoadFail;
}

export type Actions = Fetch
  | Update
  | Delete
  | Add
  | EmployeeLoadSuccess;