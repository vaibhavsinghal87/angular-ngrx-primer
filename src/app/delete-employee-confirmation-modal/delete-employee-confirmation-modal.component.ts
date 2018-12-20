import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-delete-employee-confirmation-modal',
  templateUrl: './delete-employee-confirmation-modal.component.html',
  styleUrls: ['./delete-employee-confirmation-modal.component.css']
})
export class DeleteEmployeeConfirmationModalComponent implements OnInit {

  @Output() action: EventEmitter<any> = new EventEmitter();
  title: string = 'Delete Employee';
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
