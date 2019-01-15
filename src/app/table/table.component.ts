import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DeleteEmployeeConfirmationModalComponent } from '../delete-employee-confirmation-modal/delete-employee-confirmation-modal.component';
import { Employee } from '../employee';

import { Store, select } from '@ngrx/store';
import * as EmployeeActions from '../store/actions/employee.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows$: Observable<Employee[]>;
  rows: Employee[] = [];
  headers: String[];

  modalRef: BsModalRef;

  constructor(private dataService: DataService, private modalService: BsModalService, private store: Store<Employee[]>) { }

  ngOnInit() {
    // get table headers from inMemoryWebApi
    this.dataService.getHeaders()
      .subscribe(response => {
        this.headers = response;
      });

    // get table data
    this.store.dispatch(new EmployeeActions.Fetch());

    this.rows$ = this.store.pipe(select('employees'));
    // this.rows$ = this.store.pipe(select(state => state.employees));
  }

  saveClicked(row: Employee) {
    this.store.dispatch(new EmployeeActions.Update(row));
  }

  deleteClicked(row: Employee) {
    let initialState = {
      item: row
    };
    this.modalRef = this.modalService.show(DeleteEmployeeConfirmationModalComponent, { initialState });
    this.modalRef.content.action.subscribe(result => {
      if (result) {
        this.store.dispatch(new EmployeeActions.Delete(row.id));
      }
    });
  }

  addEmployee(emp: Employee) {
    this.store.dispatch(new EmployeeActions.Add(emp));
  }
}
