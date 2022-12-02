import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl: string = 'http://localhost:8080/';
   headers = new HttpHeaders()
     .set('Authorization',localStorage.getItem('token') as string)

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<any>{
    return this.http.post<any>(this.baseUrl+'common/get-user', {userId:id},{'headers':this.headers})

    // return this.http.post<any>(this.baseUrl,{id},
    //
    // {
    //   headers: new HttpHeaders().set('Authorization',localStorage.getItem('token') as string)
    // }
    // //
    // );
  }
  getPost(id: string): Observable<any>{
     return this.http.get<any>(this.baseUrl+'public-posts'+{userId:id})
  }
}
