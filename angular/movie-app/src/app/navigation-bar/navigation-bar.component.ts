import { Component, OnInit } from '@angular/core';
import logo from '../../assets/logo.png'

@Component({
  selector: 'app-navigation-bar',
  template: `
    <div>
      <img [src]="logo" width="200" alt="Logo Movie App"/>
    </div>
  `,
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  logo = logo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
