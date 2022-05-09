import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../interface/i-login-response ';
import { IRegisterResponse } from '../interface/i-register-response ';
import { IUserEdit } from '../interface/i-user-edit';
import { IUserResponse } from '../interface/i-user-response';
import { IUserIdResponse } from '../interface/i-userId-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  findAll() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { 

  }

  login(email: string, password: string ): Observable<ILoginResponse> {
    
    let url = 'http://localhost:8080/user/login';
    let body = {
      email: email,
      password: password
    }
    return this.http.post<ILoginResponse>(url,body);
  }

  register(email: string, password: string, firstName: string, lastName: string): Observable<IRegisterResponse> {
    
    let url = 'http://localhost:8080/user/register';
    let body = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }
    return this.http.post<IRegisterResponse>(url,body);
  }

  activateAccount(token: string): Observable<any> {
    
    let url = 'http://localhost:8080/user/activate';
    let body = {
      token: token
    }
    return this.http.post<any>(url,body);
  }

  resendActivation(token: string){
    
    let url = 'http://localhost:8080/user/resend-activation-email';
    let body = {
      token: token
    }
    return this.http.post<any>(url,body);

  }

  listUsers(): Observable<IUserResponse[]> {

    let url = 'http://localhost:8080/user/users';

    return this.http.get<IUserResponse[]>(url);
  }

 
  getUserById(id: string): Observable<any>{

    let url = 'http://localhost:8080/user/users/' + id;

    return this.http.get<any>(url);

  }

  updateUserById(id: string, firstName: string, lastName: string): Observable<IUserEdit>{

    let url = 'http://localhost:8080/user/users/edit/' + id;
    let body = {
      firstName: firstName,
      lastName: lastName

    }
    
    return this.http.post<IUserEdit>(url,body);

  }

  deleteById(id: string): Observable<any>{

    let url = 'http://localhost:8080/user/delete/' + id;

    return this.http.delete<any>(url);

  }

 
}
