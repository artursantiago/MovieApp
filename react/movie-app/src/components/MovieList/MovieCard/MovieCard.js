import React, {useContext} from 'react'

import { Context } from '../../Auth/AuthContext'
import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies'
import noImage from './noimage.png'
import './MovieCard.css'

export default function MovieCard(props) {
  const {authenticated} = useContext(Context)
  const {movie} = props;

  function addFavorite(movie) {
    alert(`${movie.title} foi adicionado a sua lista de favoritos.`)
  }

  return (
    <div className="movie-card">
      {
        authenticated ?
          <span className="favorite" onClick={() => {addFavorite(movie)}} title="Add to my favorite list">
            <i className="fas fa-heart"></i>
          </span>
          : ''
      }
      
      <a href="#" className="image">
        <img className="poster" src={movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage} alt="Movie Poster"/>
      </a>

      <div className="info">
        <div className="rating">
          {movie.vote_average}
        </div>
        <h2><a href="#" title={movie.title}>{movie.title}</a></h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  ) 
}