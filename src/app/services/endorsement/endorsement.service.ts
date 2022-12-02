import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/components/auth/srvices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EndorsementService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:8080`


  getAllPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/public-endorsments/get-endorsements?skip=0&limit=9`)
 }
  getPost(): Observable<any> {
    return this.http.get(`${this.baseURL}/public-endorsments/get-endorsements?skip=0&limit=3`)
  }

   getAPost(id: any): Observable<any> {
    return this.http.get(`${this.baseURL}/public-endorsments/get-endorsement?endorsementId=${id}`)
  }
  postCount(location: any): Observable<any> {
    return this.http.get(`${this.baseURL}/public-endorsments/get-endorsement-count?location=${location}`)
  }

   postByLocation(location: any): Observable<any> {
    return this.http.get(`${this.baseURL}/public-endorsments/get-endorsements-by-loc?location=${location}&skip=0&limit=9`)
  }

  endorsePost(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/endorsments/endorse-endorsement`, data)
    }

  uploadAPost(data: any): Observable<any> {
    debugger
  return this.http.post(`${this.baseURL}/endorsments/add-endorsement`, data, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)});
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.post(`${this.baseURL}/endorsments/edit-endorsement`, data)
  }

  deleteData(id: any): Observable<any> {
    return this.http.post(`${this.baseURL}/delete-endorsement`, id, {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem("token")}`)})
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

    const req = new HttpRequest('POST', `${this.baseURL}/endorsments/add-endorsement`, formData, options);
    return this.http.request(req);
  }

}
