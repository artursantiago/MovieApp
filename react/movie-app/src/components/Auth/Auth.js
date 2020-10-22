import React from 'react'
// import * as auth from '../../api/apiFirebase'
import './Auth.css'

export default function Auth(props) {

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  }

  return (
    <div className="modal-bg">
      <div className="modal">
        <button className="exit" onClick={() => props.showSignInModal(false)}><i className="fas fa-times-circle"></i></button>
        <form onSubmit={handleFormSubmit}>
          <h2>Sign In</h2>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email"/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
          </div>
          <button className="btn" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  )
}