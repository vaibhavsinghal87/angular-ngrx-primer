import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() empData: any;

  constructor() { }

  ngOnInit() {
    this.empData = this.convertToArray();
  }

  convertToArray(): Array<any> {
    let data: Array<any> = [];
    this.empData = Object.keys(this.empData).map(item => data.push(this.empData[item]));
    return data;
  }

}
