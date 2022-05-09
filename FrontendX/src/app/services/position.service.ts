import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreatePositionResponse } from '../interface/i-create-position-response';
import { IPositionsResponse } from '../interface/i-positions-response';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  createPosition(

    position: string
    ): Observable<ICreatePositionResponse[]>{

    let url = 'http://localhost:8080/position/create/position';
    let body = {

      position: position

    }

    return this.http.post<ICreatePositionResponse[]>(url,body);
  }

  listPosition(): Observable<IPositionsResponse[]> {

    let url = 'http://localhost:8080/position/positions';

    return this.http.get<IPositionsResponse[]>(url);
  }

  deletePosition(id: string): Observable<any>{

    let url = 'http://localhost:8080/position/delete/' + id;

    return this.http.delete<any>(url);

  }



}
