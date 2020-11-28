import router from 'page';

import * as api from '../api/apiFirebase';
import AuthStore from '../stores/AuthStore';

function handleLogin (email, password) {
  api.signIn(email, password)
  .then(result => {
    localStorage.setItem("user_uid", result.user.uid)
    AuthStore.update(() => {
      return {
        authenticated: true,
        errorMessage: '',
        user: {uid: result.user.uid},
      }
    });
    router('/');
  })
  .catch(error => {
    AuthStore.update(() => {

    });
    if (error.code === "auth/wrong-password")
      AuthStore.update(() => {
        return {
          authenticated: false,
          errorMessage: 'Wrong Password',
          user: {uid: ''},
        }
      });
    else
      AuthStore.update(() => {
        return {
          authenticated: false,
          errorMessage: error.message,
          user: {uid: ''},
        }
      });
    console.log(error)
  })
}

function handleLogout() {
  AuthStore.update(() => {
    return {
      authenticated: false,
      errorMessage: '',
      user: {uid:''},
    }
  });
  localStorage.removeItem('user_uid');
}

function handleSignUp(email, password) {
  api.signUp(email, password)
  .then(result => {
    localStorage.setItem("user_uid", result.user.uid);
    AuthStore.update(() => {
      return {
        authenticated: true,
        errorMessage: '',
        user: {uid: result.user.uid},
      }
    });
  })
  .catch(error => {
    if (error.code === "auth/email-already-in-use")
      AuthStore.update(() => {
        return {
          authenticated: false,
          errorMessage: "Email already exists",
          user: {uid: ''},
        }
      });
    else if (error.code === "auth/weak-password")
      AuthStore.update(() => {
        return {
          authenticated: false,
          errorMessage: "Password should be at least 6 characters",
          user: {uid: ''},
        }
      });
    else
      AuthStore.update(() => {
        return {
          authenticated: false,
          errorMessage: error.message,
          user: {uid: ''},
        }
      });
    console.log(error);
  })
}

export {handleLogin, handleLogout, handleSignUp}