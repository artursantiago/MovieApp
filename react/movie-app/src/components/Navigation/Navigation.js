import React, {useContext} from 'react'

import {Context} from '../Auth/AuthContext'
import history from '../../history'

import logo from '../../assets/logo.png'
import github from '../../assets/github-logo.svg'
import './Navigation.css';

export default function Navigation() {
  const { authenticated, handleLogout } = useContext(Context)

  return (
    <div className="nav">
      <img className="logo" src={logo} alt="Logo Movie App" onClick={() => history.push('/')} />
      <div className="actions">
        <img className="github active" src={github} alt="Logo Movie App" />
        {
          authenticated ? <button className="btn" onClick={() => handleLogout()}>Sign Out</button>
          : <button className="btn" onClick={() => history.push('/login')} >Sign In</button>
        }
      </div>
    </div>
  )
}