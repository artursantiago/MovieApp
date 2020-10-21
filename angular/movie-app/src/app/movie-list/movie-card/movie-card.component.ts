import { Component, Input } from '@angular/core'
import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies'
import noImage from './noimage.png'

@Component({
  selector: 'app-movie-card',
  template: `
    <div class="movie-card">
      <span class="favorite" (click)="addFavorite(movie)" title="Add to my favorite list">
        <i class="fas fa-heart"></i>
      </span>
      <a href="#" class="image">
        <img class="poster" [src]="movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage" alt="Movie Poster"/>
      </a>

      <div class="info">
        <div class="rating">
          {{movie.vote_average}}
        </div>
        <h2><a href="#" [title]="movie.title">{{movie.title}}</a></h2>
        <p>{{movie.release_date}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  movie;

  MOVIE_DB_IMAGE_URL = MOVIE_DB_IMAGE_URL;
  noImage = noImage;
  
  constructor() { }

  addFavorite(movie) {
    alert(`${movie.title} foi adicionado a sua lista de favoritos.`)
  }
}