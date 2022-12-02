import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:8080`


  getAllPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/public-petitions/get-petitions?skip=0&limit=9`)
 }

  getPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/public-petitions/get-petitions?skip=0&limit=3`)
  }

 getAPost(id: any): Observable<any> {
  return this.http.get(`${this.baseURL}/public-petitions/get-petition?petitionId=${id}`)
}

  postSignature(data: any): Observable<any> {
  return this.http.post(`${this.baseURL}/petitions/sign-petition`, data, {headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') as string)})
  }

  postCount(location: any): Observable<any> {
    return this.http.get(`${this.baseURL}/public-petitions/get-petition-count?location=${location}`)
  }

  postByLocation(location: any): Observable<any> {
    return this.http.get(`${this.baseURL}/public-petitions/get-petitions-by-loc?location=${location}&skip=0&limit=9`)
  }
  updateData(data: any, id: string): Observable<any> {
    return this.http.post(`${this.baseURL}/petitions/edit-petition`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.post(`${this.baseURL}/delete-petition`, id, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
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

    const req = new HttpRequest('POST', `${this.baseURL}/petitions/add-petition`, formData, options);
    return this.http.request(req);
  }
}
