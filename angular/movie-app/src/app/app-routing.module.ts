import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { MovieListComponent } from './movie-list/movie-list.component'
import { MovieComponent } from '../app/movie/movie.component'

const routes: Routes = [
  {path: '', component: MovieListComponent },
  {path: 'login', component: LoginComponent },
  {
    path: 'movie',
    children: [
      { path: ':id', component: MovieComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, MovieListComponent, MovieComponent]
