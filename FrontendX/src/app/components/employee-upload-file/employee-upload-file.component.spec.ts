import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUploadFileComponent } from './employee-upload-file.component';

describe('EmployeeUploadFileComponent', () => {
  let component: EmployeeUploadFileComponent;
  let fixture: ComponentFixture<EmployeeUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUploadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
