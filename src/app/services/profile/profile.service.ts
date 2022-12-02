import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:8080`


  getAllUser(): Observable<any> { 
    return this.http.get(`${this.baseURL}/common/get-users`)
   }

  getAUser(id: any): Observable<any> {
  return this.http.get(`${this.baseURL}/common/get-user?userId=${id}`)
  }
}
