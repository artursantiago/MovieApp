import React, {useContext} from 'react'

import history from '../../../history'
import { Context } from '../../Auth/AuthContext'
import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies'
import noImage from '../../../assets/noimage.png'
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
      
      <button onClick={() => history.push(`/movie/${movie.id}`)} className="image">
        <img className="poster" src={movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage} alt="Movie Poster"/>
      </button>

      <div className="info">
        <div className="rating">
          {movie.vote_average}
        </div>
        <h2><button className="title" onClick={() => history.push(`/movie/${movie.id}`)} title={movie.title}>{movie.title}</button></h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  ) 
}