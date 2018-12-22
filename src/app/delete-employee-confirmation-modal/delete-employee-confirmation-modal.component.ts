import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-delete-employee-confirmation-modal',
  templateUrl: './delete-employee-confirmation-modal.component.html',
  styleUrls: ['./delete-employee-confirmation-modal.component.scss']
})
export class DeleteEmployeeConfirmationModalComponent implements OnInit {

  title: string = 'DELETE EMPLOYEE';
  
  @Output() action: EventEmitter<any> = new EventEmitter();
  item: any = {};

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  confirm() {
    this.bsModalRef.hide();
    this.action.emit(true);
  }

  decline() {
    this.bsModalRef.hide();
    this.action.emit(false);
  }

}
