import { Component, OnInit } from '@angular/core';
import { Users } from '../../gituser'
import { GithubserviceService } from 'src/app/services/githubservice.service';
import { RepoService } from 'src/app/services/reposervice.service'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  username:any=GithubserviceService;
  gituser:Users=new Users('','','','',0,0,0);
  gitRepos:any;
  getUsername(){
    
      console.log(GithubserviceService);

    
  }
  getRepos(){
    this.aron.getRepo(this.username).subscribe(details=>{
      console.log(details);
      return this.gitRepos = details;

    });
  }

  constructor(private service:GithubserviceService, private aron:RepoService) {
    
   }

  ngOnInit(): void {
  }
}
