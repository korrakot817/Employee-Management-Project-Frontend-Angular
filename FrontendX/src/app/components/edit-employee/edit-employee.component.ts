import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  id: any;
  test: any;
  response: any;

  firstName: any;
  lastName: any;
  gender: any;
  email: any;
  phoneNumber: any;
  salary: any;
  street: any;
  city: any;
  state: any;
  zipcode: any;


  editEmployeeFormGroup: FormGroup = new FormGroup({
    
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    zipcode: new FormControl('',Validators.required)

  
  });

  constructor(

    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute


  ) { }

  ngOnInit(): void {

    this.test = this.route.snapshot.queryParamMap.get('id');
    
    this.id = JSON.parse(this.test);
    console.log(this.id);

    this.getEmployee();


  }

  getEmployee(){

    this.employeeService.getEmployee(this.id).subscribe(data => {

      console.log(data);
      console.log(data.firstName);
      console.log(data.lastName);
      console.log(data.salary);


      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.gender = data.gender;
      this.email = data.email;
      this.phoneNumber = data.phoneNumber;
      this.salary = data.salary;
      this.street = data.street;
      this.city = data.city;
      this.state = data.state;
      this.zipcode = data.zipcode;
      
    });
  
  }

  onSubmit(): void{
    if(this.editEmployeeFormGroup.invalid){
      return;
    }

    let id = this.id
    let firstName = this.editEmployeeFormGroup.controls['firstName'].value;
    let lastName = this.editEmployeeFormGroup.controls['lastName'].value;
    let gender = this.editEmployeeFormGroup.controls['gender'].value;
    let email = this.editEmployeeFormGroup.controls['email'].value;
    let phoneNumber = this.editEmployeeFormGroup.controls['phoneNumber'].value;
    let salary = this.editEmployeeFormGroup.controls['salary'].value;
    let street = this.editEmployeeFormGroup.controls['street'].value;
    let city = this.editEmployeeFormGroup.controls['city'].value;
    let state = this.editEmployeeFormGroup.controls['state'].value;
    let zipcode = this.editEmployeeFormGroup.controls['zipcode'].value;

    this.employeeService.updateEmployee(
      id,firstName,lastName,gender,email,phoneNumber,salary,street,city,state,zipcode
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
