import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.scss']
})
export class DetailsEmployeeComponent implements OnInit {

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
  city: any
  state: any;
  zipcode: any;
  picture: any;



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
      this.picture = data.picture;

    });
  
  }

  onUpload(id: string){

    let employee = JSON.stringify(id)
     this.router.navigate(['/uploadFile/'], { queryParams: { id: employee } });

  }

}
