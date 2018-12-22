import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DeleteEmployeeConfirmationModalComponent } from '../delete-employee-confirmation-modal/delete-employee-confirmation-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows: Object[] = [];
  headers: String[];

  modalRef: BsModalRef;

  constructor(private dataService: DataService, private modalService: BsModalService) { }

  ngOnInit() {
    this.dataService.getEmployees()
      .subscribe(data => {
        this.rows = data.rows;
        this.headers = data.headers;
      });
  }

  saveClicked(row) {
    this.dataService.updateEmployee(row).subscribe(data => {
      this.rows = data;
    });
  }

  deleteClicked(row) {
    let initialState = {
      item: row
    };
    this.modalRef = this.modalService.show(DeleteEmployeeConfirmationModalComponent, { initialState });
    this.modalRef.content.action.subscribe(result => {
      if (result) {
        this.dataService.delete(row.id).subscribe(data => {
          this.rows = data;
        });
      }
    });
  }

  addEmployee(emp) {
    this.dataService.addEmployee(emp).subscribe(data => {
      this.rows = data;
    });
  }
}
