import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from 'src/app/services/githubservice.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  username:any;
  gituser:any;
  getUsername(){
    this.service.getUser(this.username).subscribe(profile=>{
      console.log(profile);
      return this.gituser = profile;
    });
  }

  constructor(private service:GithubserviceService) {
    
   }


  ngOnInit(): void {
  }

}
