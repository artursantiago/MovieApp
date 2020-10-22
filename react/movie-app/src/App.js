import React, {useState} from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList'
import Navigation from './components/Navigation/Navigation';
import Auth from './components/Auth/Auth'

function App() {

  const [isModalActive, setIsModalActive] = useState(false);
  
  function showSignInModal(value) {
    console.log(value);
    setIsModalActive(value);
  }

  return (
    <div>
      <Navigation showSignInModal={showSignInModal} />
      {isModalActive ? <Auth showSignInModal={showSignInModal} /> : ''}
      {!isModalActive ? <MovieList/> : ''}
    </div>
  );
}

export default App;
