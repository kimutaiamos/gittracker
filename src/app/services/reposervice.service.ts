import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  API = 'https://api.github.com/users/';
  token = '?access_token=';
  constructor(public  http: HttpClient) {
  }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this.API + searchTerm + '/repos?' + this.token);
  }
}
