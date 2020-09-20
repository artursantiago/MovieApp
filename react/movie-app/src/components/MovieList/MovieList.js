import React from 'react'
import * as apiMovies from '../../api/apiMovies'
import MovieCard from './MovieCard/MovieCard'

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
      console.log(result.data);
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
      <div>
        {list}
      </div>
    )
  }
}