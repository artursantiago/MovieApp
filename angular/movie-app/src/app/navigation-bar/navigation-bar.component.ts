import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  template: `
    <p>
      navigation-bar works!
    </p>
  `,
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
