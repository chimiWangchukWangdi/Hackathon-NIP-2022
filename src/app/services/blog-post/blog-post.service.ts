import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:8080`


  getAllPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/public-posts/get-posts?skip=0&limit=20`)
 }

 getAPost(id: any): Observable<any> {
  return this.http.get(`${this.baseURL}/public-posts/get-post?endorsementId=${id}`)
}
  postCount(location: any): Observable<any> {
    return this.http.get(`${this.baseURL}/public-posts/get-posts-count?location=${location}`)
  }

  postByLocation(location: any): Observable<any> {
    return this.http.get(`${this.baseURL}/public-posts/get-posts-by-loc?location=${location}&skip=0&limit=9`)
  }
  uploadAPost(data: any): Observable<any> {
  return this.http.post(`${this.baseURL}/posts/add-post`, data, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.post(`${this.baseURL}/posts/edit-post`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.post(`${this.baseURL}/delete-post`, id, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
}

  addGallery(data: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('goal', data.goal);
    formData.append('description', data.description);
    const header = new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`);
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };

    const req = new HttpRequest('POST', `${this.baseURL}/posts/add-post`, formData, options);
    return this.http.request(req);
  }
}
