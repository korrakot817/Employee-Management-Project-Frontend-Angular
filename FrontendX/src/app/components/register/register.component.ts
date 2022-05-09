import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required)

  });

  constructor(
    private userService: UserService,
    private router: Router


  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(this.registerFormGroup.invalid){
      return;
    }

    let email = this.registerFormGroup.controls['email'].value;
    let password = this.registerFormGroup.controls['password'].value;
    let firstName = this.registerFormGroup.controls['firstName'].value;
    let lastName = this.registerFormGroup.controls['lastName'].value;

    this.userService.register(email,password,firstName,lastName).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
        
      }, (error) => {
        alert(error.error.error);
      }
    );

  }

}
