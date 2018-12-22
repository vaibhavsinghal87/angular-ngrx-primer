import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss']
})
export class AddEmployeeModalComponent implements OnInit {

  title: string = 'ADD EMPLOYEE';
  
  @Output() action: EventEmitter<any> = new EventEmitter();
  addEmployeeForm = new FormGroup({
    empId: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    project: new FormControl('', Validators.required)
  });

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  add() {
    if (this.addEmployeeForm.status === 'VALID') {
      this.action.emit(this.addEmployeeForm.value);
      this.bsModalRef.hide();
      this.addEmployeeForm.reset();
    }
  }

  cancel() {
    this.bsModalRef.hide();
    this.addEmployeeForm.reset();
  }

  get empId() {
    return this.addEmployeeForm.get('empId');
  }

}
