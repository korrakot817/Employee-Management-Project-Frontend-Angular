import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUserResponse } from 'src/app/interface/i-user-response';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUserResponse[] = [];


  constructor( 
    private userService: UserService,
    private router: Router
    
    ) { }

  ngOnInit(): void {

    this.getUser();

  }

  getUser(){

    this.userService.listUsers().subscribe(data => {
      this.users = data;
      
    });
  }
  onEdit(id: string){

    let user = JSON.stringify(id)
     this.router.navigate(['/users/edit'], { queryParams: { id: user } });
    

  }
  
  deleteById(id : string){
    this.userService.deleteById(id).subscribe(
      data => {
      console.log(data);

      this.getUser();
    
    },
        error => console.log(error));
  }

}
