import { state } from '@angular/animations';
import { Action, createAction, props } from '@ngrx/store';
import {handleLogin, handleLogout, handleSignUp } from '../../functions/authFunctions'

enum ActionTypes {
  Login = 'Login',
  Logout = 'Logout',
  SignUp = 'SignUp',
  SetErrorMessage = 'SetErrorMessage'
}

export const signUp = createAction(
  ActionTypes.SignUp, 
  props<{ user: any }>()
)

export const login = createAction(
  ActionTypes.Login, 
  props<{ user: any }>()
)

export const setErrorMessage = createAction(
  ActionTypes.SetErrorMessage, 
  props<{ errorMessage: any }>()
)

export class Logout implements Action {
  readonly type = 'Logout'
}


const INITIAL_STATE = {
  authenticated: false,
  errorMessage: '',
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
    case 'SetErrorMessage':
      console.log(action);
      return {...state, errorMessage: action.errorMessage}
    default:
      return state;
  }
}