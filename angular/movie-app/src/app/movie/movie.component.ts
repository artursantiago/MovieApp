import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


import { MOVIE_DB_IMAGE_URL, getMovie } from '../../api/apiMovies';
import noImage from '../../assets/noimage.png';
import cinemaBG from '../../assets/cinema.jpg';

@Component({
  selector: 'app-movie',
  template: `
    <div class="wrapper" style="color: white">
      <div class="poster">
        <img [src]="movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage" alt=""/>
      </div>
      <div class="container">
        <div class="details">
          <div class="info">
            <div class="title">
              <h2>{{movie.title ? movie.title : movie.original_title}}</h2>
              <p>{{movie.tagline}}</p>
            </div>
            <div class="rating">
              <span>{{movie.vote_average}}</span>
            </div>
          </div>
          
          <div>
            <button class="btn-favorites btn-on">
              <i class="far fa-bookmark" aria-hidden="true"></i>
              Add to my favorites
            </button>
          </div>
          
          <p class="overview">{{movie.overview}}</p>
          
          <div *ngIf="movie.genres" class="genres">
            Genres:
            <span *ngFor="let genre of movie.genres" :key="genre.id">{{genre.name}}</span>
          </div>
        </div>
        
        <div class="others-info">
          <div>
            <i class="fa fa-clock-o movie__icon" aria-hidden="true"></i>
            Release Date: <span><b>{{movie.release_date}}</b></span>
          </div>
          <div>
            <i class="fas fa-history movie__icon" aria-hidden="true"></i>
            Duration: <span><b>{{movie.runtime}}</b></span>
          </div>
          <div>
            <i class="fa fa-money movie__icon" aria-hidden="true"></i>
            Revenue:  <span><b>{{movie.revenue}}</b></span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  MOVIE_DB_IMAGE_URL = MOVIE_DB_IMAGE_URL;
  noImage = noImage;
  cinemaBG = cinemaBG;

  auth$: Observable<any>;

  // Data
  movie;
  id;

  getMovieDetails() {
    getMovie(this.id)
    .then(async result => {
      this.movie = await result.data;
      document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0, .5)), url(${result.data.backdrop_path ? this.MOVIE_DB_IMAGE_URL.large + result.data.backdrop_path : this.cinemaBG})`
    })
    .catch(error => {
      console.log(error);
    })
  }

  constructor (
    public store: Store<{authenticated: boolean, user: any}>, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.auth$ = this.store.pipe(
      // select('AuthReducer')
    );

    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.getMovieDetails();
  }

  ngOnDestroy(): void {
    document.body.style.backgroundImage = `url(${this.cinemaBG})`;
  }

}
