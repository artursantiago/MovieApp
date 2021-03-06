import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  template: `
    <div>
      <nav>
        <div *ngFor="let f of filters">
          <span class="item" [class]="f.key == filter.key ? 'active' : ''"
            (click)="edit.emit(f)">
              {{f.name}}\
            </span>
        </div>
      </nav>
    </div>
  `,
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {

  @Input()
  filter

  @Output()
  edit = new EventEmitter()

  filters = [
    {key: 'popular', name: 'Popular'},
    {key: 'now_playing', name: 'Now Playing'},
    {key: 'upcoming', name: 'Upcoming'},
    {key: 'top_rated', name: 'Top Rated'}
  ]
  constructor() { }

}
