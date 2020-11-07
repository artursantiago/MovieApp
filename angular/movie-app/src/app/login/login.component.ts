import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'

import { login } from '../store/ngrx'
import { handleLogin, handleSignUp } from '../../functions/authFunctions';
import { signUp } from 'src/api/apiFirebase';

@Component({
  selector: 'app-login',
  template: `
    <div class="modal-bg">
      <div class="modal">
        <a href="/" class="exit"><i class="fas fa-times-circle"></i></a>
        <form>
          <h2> {{isNewUser ? 'Sign Up' : 'Sign In'}} </h2>
          <h2>{{(auth$ | async).authenticated}}</h2>
          <!-- <div v-if="errorMessage" class="error-message">
            <p>{{errorMessage}}</p>
          </div> -->
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

  isNewUser = false
  email = ''
  password = ''

  constructor(private store: Store<{ authenticated: boolean, user: any }>) { }

  ngOnInit(): void {
    this.auth$ = this.store.pipe(
      select('AuthReducer')
    );
  }

  toggleIsNewUser() {
    this.isNewUser = !this.isNewUser;
  }

  async handleFormSubmit() {
    if (this.isNewUser) {
      handleSignUp(this.email, this.password);
      if (localStorage.getItem('user')) {
        this.store.dispatch(signUp({ user: JSON.parse(localStorage.getItem('user'))}));
      }
    }
    else {
      handleLogin(this.email, this.password);
      if (localStorage.getItem('user')) {
        this.store.dispatch(login({ user: JSON.parse(localStorage.getItem('user'))}));
      }
    }
  }

}
