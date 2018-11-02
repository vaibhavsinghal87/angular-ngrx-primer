import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployees()
      .subscribe(data => {
        this.employees = data;
        console.log(this.employees);
      }
    );
  }

}
