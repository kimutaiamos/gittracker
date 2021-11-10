import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  username:any;
  repos:any;
  constructor( private http:HttpClient) { }
  getUser(user:any){
    return this.http.get("https://api.github.com/users/" + user+ "?access_token=" + environment.api_key)
    .pipe(((response:any)=>response));
  }
}