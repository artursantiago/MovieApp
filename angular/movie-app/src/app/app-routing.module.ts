import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { MovieListComponent } from './movie-list/movie-list.component'

const routes: Routes = [
  {path: '', component: MovieListComponent },
  {path: 'login', component: LoginComponent },
  // {
  //   path: 'movie',
  //   children: [
  //     { path: ':id', component: MovieComponent}
  //   ]
  // },
  // {path: 'favorites'}
  // {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, MovieListComponent]
