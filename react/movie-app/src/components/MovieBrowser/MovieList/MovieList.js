import React from 'react'
import * as apiMovies from '../../../api/apiMovies'
import MovieCard from './MovieCard/MovieCard'
import MovieFilter from './MovieFilter/MovieFilter.js'
import './MovieList.css'

export default class MovieList extends React.Component {

  state = {
    movieList: [],
    filter: {
      key: 'popular', name: 'Popular'
    },
    pagination : {
      page: 1,
      total_results: 0,
      total_pages: 0,
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = (page) => {
    apiMovies.getMovies({page: this.state.pagination.page, filter: this.state.filter.key}).then(result => {
      this.setState({
        movieList: result.data.results,
        pagination: {
          page: result.data.page,
          total_results: result.data.total_results,
          total_pages: result.data.total_pages,
        }
      })
    })
  }

  onFilterChange = (filter) => {
    if (filter === this.state.filter)
      return
    this.setState({
      filter
    })
    this.getMovies(1)
  }

  render() {
    const list = this.state.movieList.map(movie => 
      <MovieCard movie={movie} key={movie.id}/>
    )

    return (
      <div>
        <MovieFilter onFilterChange={this.onFilterChange} filter={this.state.filter}/>
        <div className="movie-list">
          {list}
        </div>
s      </div>
    )
  }
}