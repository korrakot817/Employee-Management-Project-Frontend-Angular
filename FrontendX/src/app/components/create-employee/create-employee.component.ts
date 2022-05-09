import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPositionsResponse } from 'src/app/interface/i-positions-response';
import { EmployeeService } from 'src/app/services/employee.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  positions: IPositionsResponse[] = [];

  createEmployeeFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    zipcode: new FormControl('',Validators.required),
    position: new FormControl('',Validators.required)

  });

  constructor(
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getPosition();

  }

  getPosition(){

    this.positionService.listPosition().subscribe(data => {
      this.positions = data;
      
    });
  }

  onSubmit(): void{
    if(this.createEmployeeFormGroup.invalid){
      return;
    }

    let firstName = this.createEmployeeFormGroup.controls['firstName'].value;
    let lastName = this.createEmployeeFormGroup.controls['lastName'].value;
    let gender = this.createEmployeeFormGroup.controls['gender'].value;
    let email = this.createEmployeeFormGroup.controls['email'].value;
    let phoneNumber = this.createEmployeeFormGroup.controls['phoneNumber'].value;
    let salary = this.createEmployeeFormGroup.controls['salary'].value;
    let street = this.createEmployeeFormGroup.controls['street'].value;
    let city = this.createEmployeeFormGroup.controls['city'].value;
    let state = this.createEmployeeFormGroup.controls['state'].value;
    let zipcode = this.createEmployeeFormGroup.controls['zipcode'].value;
    let position = this.createEmployeeFormGroup.controls['position'].value;

    this.employeeService.createEmployee(
      firstName,lastName,gender,email,phoneNumber,salary,street,city,state,zipcode,position
      ).subscribe(
      (response) => {
        console.log(response);
        alert('SUCCESS');
        this.router.navigate(['/employees']);
        
      }, (error) => {
        alert(error.error.error);
      }
    );

  }

}
