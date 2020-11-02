import React from 'react'
import { Router } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'

import { AuthProvider } from './components/Auth/AuthContext'
import history from './history'
import Routes from './routes'

function App() {
  return (
    <AuthProvider>
      <Navigation/>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
