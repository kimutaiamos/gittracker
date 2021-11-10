import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { GitUsersComponent } from './components/git-users/git-users.component';
import { RepoComponent } from './components/repo/repo.component';
import { GithubserviceService } from './services/githubservice.service';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GitUsersComponent,
    RepoComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ GithubserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }