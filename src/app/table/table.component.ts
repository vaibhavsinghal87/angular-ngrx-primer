import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  employees: any;
  tableData: Array<any> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployees()
      .subscribe(data => {
        this.employees = data;
        this.tableData = this.employees.rowData;
      });
  }

  saveClicked(row) {
    this.dataService.updateEmployee(row).subscribe(data => {
      this.tableData = data;
    });
  }

  deleteClicked() {
    console.log('delete clicked');
  }

}
