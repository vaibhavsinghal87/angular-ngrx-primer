import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '../../employee';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() empData: Employee;
  @Output() onSaveClicked: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteClicked: EventEmitter<any> = new EventEmitter();

  editMode: boolean = false;
  selected = null;

  constructor() { }

  ngOnInit() {
  }

  editClickHandler() {
    this.selected = Object.assign({}, this.empData);
    this.editMode = true;
  }

  deleteClickHandler(row: Employee) {
    this.onDeleteClicked.emit(row);
  }

  saveClickHandler() {
    this.onSaveClicked.emit(this.selected);
    this.editMode = false;
  }

  cancelClickHandler() {
    this.selected = null;
    this.editMode = false;
  }

}
