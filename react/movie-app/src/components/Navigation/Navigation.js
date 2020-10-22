import React from 'react'
import logo from '../../assets/logo.png'
// import githubColored from '../../assets/github-colored.svg'
import github from '../../assets/github-white.svg'
import './Navigation.css';

export default function Navigation(props) {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="Logo Movie App"/>
      <div className="actions">
        <img className="github active" src={github} alt="Logo Movie App" />
        <button className="btn" onClick={() => props.showSignInModal(true)} >Sign In</button>
      </div>
    </div>
  )
}