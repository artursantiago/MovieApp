import React from 'react'
import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies'
import noImage from './noimage.png'
import './MovieCard.css'

export default props => {
  const {movie} = props

  return (
    <div className="movie-card" style={{backgroundImage: `url(${movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage})`}}>

      <button className="movie-card__favorite" title="Add to my favorite list"><i className="fas fa-heart"></i></button>

      <div className="movie-card__rating">
        {movie.vote_average}
      </div>
      
      <div className="movie-card__info">
        <h4>{movie.title}</h4>
        <span>{movie.release_date}</span>
      </div>
    </div>
  ) 
}