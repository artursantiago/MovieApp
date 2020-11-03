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
        user: {uid: result.user.uid},
      }
    });
    router('/');
    // Insert new user on firebase
    // Call firebase for the user data
  })
  .catch(error => {
    // if (error.code === "auth/wrong-password")
    //   setErrorMessage("Wrong Password")
    // else
    //   setErrorMessage(error.message)
    console.log(error)
  })
}

function handleLogout() {
  AuthStore.update(() => {
    return {
      authenticated: false,
      user: {uid:''},
    }
  });
  localStorage.removeItem('user_uid');
}

function handleSignUp(email, password) {
  api.signUp(email, password)
  .then(result => {
    alert(result);
    localStorage.setItem("user_uid", result.user.uid);
    AuthStore.update(() => {
      return {
        authenticated: true,
        user: {uid: result.user.uid},
      }
    });
    // Insert new user on firebase
    // Call firebase for the user data
  })
  .catch(error => {
    // if (error.code === "auth/email-already-in-use")
    //   setErrorMessage("Email already exists");
    // else if (error.code === "auth/weak-password")
    //   setErrorMessage("Password should be at least 6 characters")
    // else
    //   setErrorMessage(error.message)
    console.log(error);
  })
}

export {handleLogin, handleLogout, handleSignUp}