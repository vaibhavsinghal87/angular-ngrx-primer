import { Component, OnInit, Input, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() empData: any;
  @Output() onSaveClicked: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteClicked: EventEmitter<any> = new EventEmitter();

  keys: String[];
  editMode: boolean = false;
  selected = null;

  constructor() { }

  ngOnInit() {  
    this.keys = Object.keys(this.empData);
  }

  editClickHandler() {
    this.selected = Object.assign({}, this.empData);
    this.editMode = true;
  }

  deleteClickHandler() {
    this.onDeleteClicked.emit(this.selected);
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
