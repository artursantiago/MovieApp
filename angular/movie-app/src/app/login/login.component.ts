import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

import { login, setErrorMessage, signUp } from '../store/ngrx'
import { handleLogin, handleSignUp } from '../../functions/authFunctions';

@Component({
  selector: 'app-login',
  template: `
    <div class="modal-bg">
      <div class="modal">
        <button (click)="exitLogin()" class="exit"><i class="fas fa-times-circle"></i></button>
        <form>
          <h2> {{isNewUser ? 'Sign Up' : 'Sign In'}} </h2>
          <h4 *ngIf="loading">Loading...</h4>
          <div *ngIf="(auth$ | async).errorMessage" class="error-message">
            <p>{{(auth$ | async).errorMessage}}</p>
          </div>
          <div class="field">
            <label for="email">E-mail</label>
            <input [(ngModel)]="email" type="email" name="email" required />
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input [(ngModel)]="password" type="password" name="password" required/>
          </div>
          <button class="btn" type="submit" (click)="handleFormSubmit()">{{isNewUser ? 'Sign Up' : 'Sign In'}}</button>
          <span *ngIf="!isNewUser" class="form-type">No account? <b (click)="toggleIsNewUser()">Create one!</b></span>
          <span *ngIf="isNewUser" class="form-type">Already an user? <b (click)="toggleIsNewUser()">Sign In</b></span>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth$: Observable<any>;

  loading = false
  isNewUser = false
  email = ''
  password = ''

  constructor(private store: Store<{ authenticated: boolean, user: any }>, private router: Router) { }

  ngOnInit(): void {
    this.auth$ = this.store.pipe(
      select('AuthReducer')
    );
  }

  exitLogin() {
    this.store.dispatch(setErrorMessage({ errorMessage: '' }))
    localStorage.removeItem('errorMessage')
    this.router.navigate([''])
  }

  toggleIsNewUser() {
    this.isNewUser = !this.isNewUser;
  }

  handleFormSubmit() {
    if (this.isNewUser) {
      handleSignUp(this.email, this.password);
      this.loading = true
      setTimeout(() => {
        if (localStorage.getItem('user')) {
          this.store.dispatch(signUp({ user: JSON.parse(localStorage.getItem('user'))}));
          this.router.navigate([''])
        } else {
          this.store.dispatch(setErrorMessage({ errorMessage: localStorage.getItem('errorMessage') }))
        }
        this.loading = false
      }, 2000);
    }
    else {
      handleLogin(this.email, this.password);
      this.loading = true
      setTimeout(() => {
        if (localStorage.getItem('user')) {
          this.store.dispatch(login({ user: JSON.parse(localStorage.getItem('user'))}));
          this.router.navigate([''])
        } else {
          this.store.dispatch(setErrorMessage({ errorMessage: localStorage.getItem('errorMessage') }))
        }
        this.loading = false
      }, 2000);
    }
  }

}
