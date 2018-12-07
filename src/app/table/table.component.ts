import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  rows: Object[] = [];
  headers: String[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployees()
      .subscribe(data => {
        this.rows = data.rows;
        this.headers = data.headers;
      });
  }

  saveClicked(row) {
    this.dataService.updateEmployee(row).subscribe(data => {
      this.rows = data;
    });
  }

  deleteClicked() {
    console.log('delete clicked');
  }
}
