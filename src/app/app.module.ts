import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table/table-row/table-row.component';

import { ModalModule } from 'ngx-bootstrap';
import { DeleteEmployeeConfirmationModalComponent } from './delete-employee-confirmation-modal/delete-employee-confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    DeleteEmployeeConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    ModalModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteEmployeeConfirmationModalComponent
  ]
})
export class AppModule { }
