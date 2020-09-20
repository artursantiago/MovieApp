import React from 'react'
import * as apiMovies from '../../api/apiMovies'
import MovieCard from './MovieCard/MovieCard'
import './MovieList.css'

export default class MovieList extends React.Component {

  state = {
    movieList: [],
    pagination : {
      page: 1,
      total_results: 0,
      total_pages: 0,
    }
  }

  componentDidMount() {
    apiMovies.getMovies({page: this.state.pagination.page}).then(result => {
      this.setState({
        movieList: result.data.results
      })
      console.log(this.state.movieList);
    })

  }

  render() {
    const list = this.state.movieList.map(movie => 
      <MovieCard movie={movie} key={movie.id}/>
    )

    return (
      <div className="movie-list">
        {list}
      </div>
    )
  }
}