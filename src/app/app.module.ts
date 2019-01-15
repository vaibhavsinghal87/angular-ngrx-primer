import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';

import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './store/reducers/employee.reducers';

import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effects/employee.effects';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    DeleteEmployeeConfirmationModalComponent,
    AddEmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    ModalModule.forRoot(),
    StoreModule.forRoot({ employees: employeeReducer }),
    EffectsModule.forRoot([EmployeeEffects])
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteEmployeeConfirmationModalComponent,
    AddEmployeeModalComponent
  ]
})
export class AppModule { }
