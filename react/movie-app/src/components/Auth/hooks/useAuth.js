import { useState } from 'react'

import * as api from '../../../api/apiFirebase'
import history from '../../../history'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  // const [errorMessage, setErrorMessage] = useState("")

  function handleLogin (email, password) {
    api.signIn(email, password)
    .then(result => {
      localStorage.setItem("user_uid", result.user.uid)
      setAuthenticated(true)
      history.push('/')
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
    setAuthenticated(false);
    localStorage.removeItem('user_uid');
  }

  function handleSignUp(email, password) {
    api.signUp(email, password)
    .then(result => {
      alert(result);
      // Insert new user on firebase
      // Call firebase for the user data
      localStorage.setItem("user_uid", result.user.uid)
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

  return { authenticated, handleLogin, handleLogout, handleSignUp }
}