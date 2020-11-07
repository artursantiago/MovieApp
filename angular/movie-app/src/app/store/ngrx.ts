import { state } from '@angular/animations';
import { Action, createAction, props } from '@ngrx/store';
import {handleLogin, handleLogout, handleSignUp } from '../../functions/authFunctions'

enum ActionTypes {
  Login = 'Login',
  Logout = 'Logout',
  SignUp = 'SignUp'
}

export const login = createAction(
  ActionTypes.Login, 
  props<{ user: any }>()
)

export class Logout implements Action {
  readonly type = 'Logout'
}

export const signUp = createAction(
  ActionTypes.SignUp, 
  props<{ user: any }>()
)

const INITIAL_STATE = {
  authenticated: false,
  user: null
}

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'Login':
      return { ...state, authenticated: true, user: action.user };
    case 'Logout':
      return { ...state, authenticated: false, user: null };
    case 'SignUp':
      return { ...state, authenticated: true, user: action.user };
    default:
      return state;
  }
}