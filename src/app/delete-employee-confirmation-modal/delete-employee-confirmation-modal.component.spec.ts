import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeConfirmationModalComponent } from './delete-employee-confirmation-modal.component';

describe('DeleteEmployeeConfirmationModalComponent', () => {
  let component: DeleteEmployeeConfirmationModalComponent;
  let fixture: ComponentFixture<DeleteEmployeeConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
