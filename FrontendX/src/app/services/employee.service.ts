import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { fileURLToPath } from 'url';
import { ICreateEmployeeResponse } from '../interface/i-create-employee-response';
import { IEmployeeEdit } from '../interface/i-employee-edit';
import { IEmployeeUploadImage } from '../interface/i-employee-upload-image';
import { IEmployeesResponse } from '../interface/i-employees-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  createEmployee(

    email: string, firstName: string, lastName: string, gender: string , phoneNumber: number,
    salary: number, street: string, city: string, state: string, zipcode: number, position: string
  
    ): Observable<ICreateEmployeeResponse[]>{

    let url = 'http://localhost:8080/employee/create-employee';
    let body = {

      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      phoneNumber: phoneNumber,
      salary: salary,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
      position: position

    }

    return this.http.post<ICreateEmployeeResponse[]>(url,body);
  }

  listEmployee(): Observable<IEmployeesResponse[]> {

    let url = 'http://localhost:8080/employee/employees';

    return this.http.get<IEmployeesResponse[]>(url);
  }

  getEmployee(id: string): Observable<any>{

    let url = 'http://localhost:8080/employee/employee/' + id;

    return this.http.get<any>(url);

  }

  updateEmployee(id: string,email: string, firstName: string, lastName: string, gender: string , phoneNumber: number,
    salary: number, street: string, city: string, state: string, zipcode: number): Observable<IEmployeeEdit>{

    let url = 'http://localhost:8080/employee/employee/edit/' + id;
    let body = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      phoneNumber: phoneNumber,
      salary: salary,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode

    }
    
    return this.http.post<IEmployeeEdit>(url,body);
  }

  uploadImage(id: string,files: File): Observable<IEmployeeUploadImage>{
    const uploadData = new FormData();
    uploadData.append('file', files);
    let url = 'http://localhost:8080/employee/uploadFile/' + id;
    return this.http.post<IEmployeeUploadImage>(url,uploadData);
  }
  

  deleteEmployee(id: string): Observable<any>{

    let url = 'http://localhost:8080/employee/delete/' + id;

    return this.http.delete<any>(url);

  }

}
