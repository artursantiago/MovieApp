import React from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList'
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div>
      <Navigation />
      <MovieList/>
    </div>
  );
}

export default App;
