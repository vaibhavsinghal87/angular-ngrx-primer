import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../data.service';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  Object = Object;

  @Input() empData: any;

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
  }

  saveClickHandler() {
    /* this.dataService.updateEmployee(this.selectedRow).subscribe(data => {
      console.log(data);
      this.editMode = false;
    }); */
  }

  cancelClickHandler() {
    this.editMode = false;
    this.selectedRow = null;
  }

}
