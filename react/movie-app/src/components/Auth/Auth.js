import React, {useState} from 'react'
import * as auth from '../../api/apiFirebase'
import './Auth.css'

export default function Auth(props) {

  const [isSignIn, setIsSignIn] = useState(true)

  function handleFormSubmit(e) {
    e.preventDefault()

    if (isSignIn)
      signIn(e.target.email.value, e.target.password.value)
    else
      signUp(e.target.email.value, e.target.password.value)
  }

  function signIn(email, password) {
    auth.signIn(email, password)
    .then(result => {
      console.log(result);
      // Call firebase for the user data
      localStorage.setItem("use_uid", result.user.uid)
    })
  }

  function signUp(email, password) {
    auth.signUp(email, password)
    .then(result => {
      console.log(result);
      // Insert new user on firebase
      // Call firebase for the user data

      localStorage.setItem("use_uid", result.user.uid)
    })
  }

  return (
    <div className="modal-bg">
      <div className="modal">
        <button className="exit" onClick={() => props.showSignInModal(false)}><i className="fas fa-times-circle"></i></button>
        <form onSubmit={handleFormSubmit}>
          <h2>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" required/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required/>
          </div>
          <button className="btn" type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            {
              isSignIn ? 
              <span className="form-type">No account? <b onClick={() => setIsSignIn(false)}>Create one!</b></span>
              : <span className="form-type">Already an user? <b onClick={() => setIsSignIn(true)}>Sign In</b></span>
            }
        </form>
      </div>
    </div>
  )
}