import { Component, Input, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'

import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies'
import noImage from '../../../../src/assets/noimage.png';

@Component({
  selector: 'app-movie-card',
  template: `
    <div class="movie-card">
      <span *ngIf="(auth$ | async).authenticated" class="favorite" (click)="addFavorite(movie)" title="Add to my favorite list">
        <i class="fas fa-heart"></i>
      </span>
      <button [routerLink]="'/movie/' + movie.id" class="image">
        <img class="poster" [src]="movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage" alt="Movie Poster"/>
      </button>

      <div class="info">
        <div class="rating">
          {{movie.vote_average}}
        </div>
        <h2><button class="title" [routerLink]="'/movie/' + movie.id" [title]="movie.title">{{movie.title}}</button></h2>
        <p>{{movie.release_date}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit{

  auth$: Observable<any>;

  @Input()
  movie;

  MOVIE_DB_IMAGE_URL = MOVIE_DB_IMAGE_URL;
  noImage = noImage;
  
  constructor(
    public store: Store<{authenticated: boolean, user: any}>
  ) { }

  ngOnInit(): void {
    this.auth$ = this.store.pipe(
      select('AuthReducer')
    );
  }

  addFavorite(movie) {
    alert(`${movie.title} foi adicionado a sua lista de favoritos.`)
  }
}
