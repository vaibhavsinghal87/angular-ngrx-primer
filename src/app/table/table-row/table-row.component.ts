import { Component, OnInit, Input, Output } from '@angular/core';

import { DataService } from '../../data.service';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  Object = Object;

  @Input() empData: any;
  @Output() onSaveClicked: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteClicked: EventEmitter<any> = new EventEmitter();

  editMode: boolean = false;
  selectedRow = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.empData = this.convertToArray();
  }

  /* convertToArray(): Array<any> {
    let data: Array<any> = [];
    this.empData = Object.keys(this.empData).map(item => data.push(this.empData[item]));
    return data;
  } */

  editClickHandler(row) {
    this.selectedRow = Object.assign({}, row);
    this.editMode = true;
  }

  deleteClickHandler() {
    this.onDeleteClicked.emit(this.selectedRow);
  }

  saveClickHandler() {
    this.onSaveClicked.emit(this.selectedRow);
    this.editMode = false;
  }

  cancelClickHandler() {
    this.editMode = false;
    this.selectedRow = null;
  }

}
