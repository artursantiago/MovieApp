import React, { useEffect, useState } from 'react';

import { MOVIE_DB_IMAGE_URL, getMovie } from '../../api/apiMovies';
import noImage from '../../assets/noimage.png'
import cinemaBG from '../../assets/cinema.jpg'
import './Movie.css';

export default function Movie(props) {

  const id = props.match.params.id;
  const [movie, setMovie] = useState({});
  
  function getMovieDetails() {
    getMovie(id)
    .then(result => {
      setMovie(result.data)
      document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0, .5)), url(${result.data.backdrop_path ? MOVIE_DB_IMAGE_URL.large + result.data.backdrop_path : cinemaBG})`
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(()=> {
    getMovieDetails();
    return () => {
      document.body.style.backgroundImage = `url(${cinemaBG})`
    }
  }, [])

  return (
    <div className="wrapper" style={{color: 'white'}}>
      <div className="poster">
        <img src={movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage} alt=""/>
      </div>
      <div className="container">
        <div className="details">
          <div className="info">
            <div className="title">
              <h2>{movie.title ? movie.title : movie.original_title}</h2>
              <p>{movie.tagline}</p>
            </div>
            <div className="rating">
              <span>{movie.vote_average}</span>
            </div>
          </div>
          
          <div>
          <button className="btn-favorites">Add to my favorites</button>
          </div>
          
          <p className="overview">{movie.overview}</p>
          
          <div className="genres">
            Genres:
            {
              movie.genres ?
                movie.genres.map(genre => {
                  return <span key={genre.id}>{genre.name}</span>
                }) : '' 
            }
          </div>
        </div>
        
        <div className="others-info">
          <div>
            <i className="fa fa-clock-o movie__icon" aria-hidden="true"></i>
            Release Date: <span><b>{movie.release_date}</b></span>
          </div>
          <div>
            <i className="fas fa-history movie__icon" aria-hidden="true"></i>
            Duration: <span><b>{movie.runtime}</b></span>
          </div>
          <div>
            <i className="fa fa-money movie__icon" aria-hidden="true"></i>
            Revenue:  <span><b>{movie.revenue}</b></span>
          </div>
        </div>
      </div>
    </div>
  )
}