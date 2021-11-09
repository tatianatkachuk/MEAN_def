import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewEditComponent } from './employee-view-edit.component';

describe('EmployeeViewEditComponent', () => {
  let component: EmployeeViewEditComponent;
  let fixture: ComponentFixture<EmployeeViewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
