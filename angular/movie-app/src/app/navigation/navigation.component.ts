import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'

import { Logout } from '../store/ngrx'
import logo from '../../assets/logo.png';
import github from '../../assets/github-logo.svg'

@Component({
  selector: 'app-navigation',
  template: `
    <div class="nav">
      <a routerLink="/"><img class="logo" [src]="logo" alt="Logo Movie App" /></a>
      <div class="actions">
        <img class="github active" [src]="github" alt="Logo Movie App" />
        <a *ngIf="!(auth$ | async).authenticated" routerLink="/login" class="btn">Sign In</a>
        <button *ngIf="(auth$ | async).authenticated" (click)="logout()" class="btn" >Sign Out</button>
      </div>
    </div>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  auth$: Observable<boolean>;

  logo = logo;
  github = github;

  constructor(private store: Store<{ authenticated: boolean, user: any }>) { }

  ngOnInit(): void {
    this.auth$ = this.store.pipe(
      select('AuthReducer')
    );
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
