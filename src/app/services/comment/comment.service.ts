import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://localhost:8080`


  commentEndorsement(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/endorsments/comment-endorsement`, data, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
    }

  commentPetition(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/petitions/comment-petition`, data, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
  }
  commentPost(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/posts/comment-post`, data, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
  }
}

