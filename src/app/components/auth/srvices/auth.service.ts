import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
// @ts-ignore
import {LoginFormModel, SignUpFormModal} from "../../models/shared.models";
import {Observable} from "rxjs";
import {SignUpFromModal} from "../../../models/shared.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body:LoginFormModel): Observable<any> {
   return  this.http.post("http://localhost:8080/auth/login",body)
  }

  // signup(body:SignUpFromModal): Observable<any> {
  //   return this.http.post("http://localhost:8080/auth/register",body)
  // }

  signup(data: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('contact', data.contact);
    formData.append('location', data.location);

    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token') as string);
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };

    const req = new HttpRequest('POST', 'http://localhost:8080/auth/register', formData, options);
    return this.http.request(req);
  }
}
