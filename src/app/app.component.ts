import { Component, ViewChild } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-ngrx-primer';
  
  @ViewChild(TableComponent) tableComp: TableComponent;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  addEmployee() {
    this.modalRef = this.modalService.show(AddEmployeeModalComponent);
    this.modalRef.content.action.subscribe(result => {
      if (result) {
        this.tableComp.addEmployee(result);
      }
    });
  }
}
