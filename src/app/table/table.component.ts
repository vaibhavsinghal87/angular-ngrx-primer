import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DeleteEmployeeConfirmationModalComponent } from '../delete-employee-confirmation-modal/delete-employee-confirmation-modal.component';
import { Employee } from '../employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows: Employee[] = [];
  headers: String[];

  modalRef: BsModalRef;

  constructor(private dataService: DataService, private modalService: BsModalService) { }

  ngOnInit() {
    // get table headers from inMemoryWebApi
    this.dataService.getHeaders()
      .subscribe(response => {
        this.headers = response;
      });
    // get table data from inMemoryWebApi
    this.getEmployees();
  }

  getEmployees(): void {
    this.dataService.getEmployees()
      .subscribe(response => {
        this.rows = response;
      });
  }

  saveClicked(row) {
    this.dataService.updateEmployee(row).subscribe(response => {
      this.getEmployees();
    });
  }

  deleteClicked(row) {
    let initialState = {
      item: row
    };
    this.modalRef = this.modalService.show(DeleteEmployeeConfirmationModalComponent, { initialState });
    this.modalRef.content.action.subscribe(result => {
      if (result) {
        this.dataService.delete(row.id).subscribe(response => {
          this.getEmployees();
        });
      }
    });
  }

  addEmployee(emp) {
    this.dataService.addEmployee(emp).subscribe(response => {
      this.getEmployees();
    });
  }
}
