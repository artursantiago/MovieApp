import { Component, OnInit } from '@angular/core';
import * as apiMovies from '../../api/apiMovies'

@Component({
  selector: 'app-movie-list',
  template: `
    <div>
      <app-movie-filter [filter]="filter" (edit)="handleFilterChange($event)"></app-movie-filter>
      <div class="movie-list">
        <div *ngFor="let movie of movies">
          <div><app-movie-card [movie]="movie"></app-movie-card></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  // Data
  movies = []
  filter = {key: 'popular', name: 'Popular'}
  page = 1
  hasMore = false
  loading = true

  async getMovies() {
    this.loading = true;
    await apiMovies.getMovies({page: this.page, filter: this.filter.key})
    .then(res => {
      this.movies =  [...this.movies, ...res.data.results];
      this.hasMore = this.page < res.data.total_pages;
      this.loading = false;
    })
  }

  handleFilterChange(newFilter) {
    if (this.filter === newFilter)
      return
    this.filter = newFilter;
    this.movies = []
    this.page = 1
    
    this.getMovies();
  }

  constructor() { }

  ngOnInit() {
    this.getMovies();
  }
}
