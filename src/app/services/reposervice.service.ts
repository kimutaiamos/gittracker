import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  API = 'https://api.github.com/users/';
  token =`${environment.api_key}`
  constructor(public  http: HttpClient) {
  }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this.API + searchTerm + '/repos?' + this.token);
  }
  
}
