import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  template: `
    <p>
      movie-card works!
    </p>
  `,
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
