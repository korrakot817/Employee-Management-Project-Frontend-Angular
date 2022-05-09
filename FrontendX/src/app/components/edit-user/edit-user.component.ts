import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserEdit } from 'src/app/interface/i-user-edit';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  id: any;
  test: any;
  response: any;

  firstName: any;
  lastName: any;
  
  editFormGroup: FormGroup = new FormGroup({
    
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required)

  
  });


  constructor(

    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute

  ) { }
 
  ngOnInit(): void {
  
    this.test = this.route.snapshot.queryParamMap.get('id');
    
    this.id = JSON.parse(this.test);
    console.log(this.id);

    this.getById();

  }

  getById(){

    this.userService.getUserById(this.id).subscribe(data => {

      console.log(data);
      console.log(data.firstName);
      console.log(data.lastName);

      this.firstName = data.firstName;
      this.lastName = data.lastName;
      
    });
  

  }

  onSubmit(): void{
    if(this.editFormGroup.invalid){
      return;
    }

    let id = this.id
    let firstName = this.editFormGroup.controls['firstName'].value;
    let lastName = this.editFormGroup.controls['lastName'].value;

    this.userService.updateUserById(id,firstName,lastName).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/users']);
        
      }, (error) => {
        alert(error.error.error);
      }
    );

  }

}


