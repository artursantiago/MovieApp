import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'

import { Logout } from '../store/ngrx'
import logo from '../../assets/logo.png';
import github from '../../assets/github-logo.svg'
import { handleLogout } from '../../functions/authFunctions';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="nav">
      <a routerLink="/"><img class="logo" [src]="logo" alt="Logo Movie App" /></a>
      <div class="actions">
        <img class="github active" [src]="github" alt="Logo Movie App" />

        <button *ngIf="!(auth$ | async).authenticated" routerLink="/login" class="btn">Sign In</button>
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

  constructor(public store: Store<{ authenticated: boolean, user: any }>) { }

  ngOnInit(): void {
    this.auth$ = this.store.pipe(
      select('AuthReducer')
    );
  }

  logout() {
    handleLogout() 
    this.store.dispatch(new Logout());
  }
}
