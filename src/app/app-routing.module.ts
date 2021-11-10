import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitUsersComponent } from './components/git-users/git-users.component';
import { RepoComponent } from './components/repo/repo.component';
import { GithubComponent } from './components/github/github.component';

const routes: Routes = [
  {path: 'users', component:GithubComponent},
  {path: 'repositories', component:RepoComponent},
  {path: '', redirectTo:"./components/github/github.component", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
