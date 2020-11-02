import React, {useState, useContext} from 'react'

import { Context } from '../Auth/AuthContext'
import history from '../../history'
import './Login.css'

export default function Login() {
  const { handleLogin, handleSignUp } = useContext(Context)
  const [isNewUser, setIsNewUser] = useState(false)

  function handleFormSubmit(e) {
    e.preventDefault()

    if (isNewUser)
      handleSignUp(e.target.email.value, e.target.password.value)
    else
      handleLogin(e.target.email.value, e.target.password.value)
  }

  return (
    <div className="modal-bg">
      <div className="modal">
        <button className="exit" onClick={() => history.push('/')}><i className="fas fa-times-circle"></i></button>
        <form onSubmit={handleFormSubmit}>
          <h2>
            {isNewUser ? 'Sign Up' : 'Sign In'}
          </h2>
          {/* {
            errorMessage ? 
            <div className="error-message">
              <p>{errorMessage}</p>
            </div> : ''
          } */}
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" required/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required/>
          </div>
          <button className="btn" type="submit">{isNewUser ? 'Sign Up' : 'Sign In'}</button>
            {
              isNewUser ? 
              <span className="form-type">No account? <b onClick={() => setIsNewUser(false)}>Create one!</b></span>
              : <span className="form-type">Already an user? <b onClick={() => setIsNewUser(true)}>Sign In</b></span>
            }
        </form>
      </div>
    </div>
  )
}