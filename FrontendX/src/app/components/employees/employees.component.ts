import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployeesResponse } from 'src/app/interface/i-employees-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployeesResponse[] = []; 

  constructor(

    private employeeService: EmployeeService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.getEmployees();

  }

  getEmployees(){

    this.employeeService.listEmployee().subscribe(data => {
      this.employees = data;
      
    });
  }

  onCreate(){

  }

  onEdit(id: string){

    let employee = JSON.stringify(id)
     this.router.navigate(['/employee/edit'], { queryParams: { id: employee } });

  }

  onDetail(id: string){
    
    let employee = JSON.stringify(id)
    this.router.navigate(['/employee/'], { queryParams: { id: employee } });

  }

  deleteEmployee(id : string){
    this.employeeService.deleteEmployee(id).subscribe(
      data => {
        console.log(data);

        this.getEmployees();

      },
      error => console.log(error));

  }

}
