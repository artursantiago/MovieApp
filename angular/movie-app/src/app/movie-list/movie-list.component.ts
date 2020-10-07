import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  template: `
    <p>
      movie-list works!
    </p>
  `,
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
