import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  username: any;
  repos: any;
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get(`${environment.apiurl}/${environment.user}?${environment.api_key}`)
      .subscribe(res => {
      
      })
  }
}
