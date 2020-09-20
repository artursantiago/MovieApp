import React from 'react'
import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies'
import noImage from './noimage.png'

export default props => {
  const {movie} = props

  return (
    <div>
      <img src={movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage} alt=""/>
      <div>{movie.vote_average}</div>
      <h4>{movie.title}</h4>
      <p>{movie.release_date}</p>
    </div>
  ) 
}