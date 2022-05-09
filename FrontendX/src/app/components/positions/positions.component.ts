import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPositionsResponse } from 'src/app/interface/i-positions-response';
import { EmployeeService } from 'src/app/services/employee.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  createPositionFormGroup: FormGroup = new FormGroup({
    position: new FormControl('',Validators.required),

  });


  positions: IPositionsResponse[] = [];

  constructor(

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

    if(this.createPositionFormGroup.invalid){
      return;
    }

    let position = this.createPositionFormGroup.controls['position'].value;

    this.positionService.createPosition(
      position
      ).subscribe(
      (response) => {
        console.log(response);
      
        
      }, (error) => {
        alert(error.error.error);
      }
    );

    this.router.navigate(['/positions']);

  }

  deletePosition(id : string){
    this.positionService.deletePosition(id).subscribe(
      data => {
        console.log(data);

        this.getPosition();

      },
      error => console.log(error));

  }

}
