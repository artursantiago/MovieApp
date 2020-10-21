import React, {useState, useEffect, useRef, useCallback} from 'react';

import * as apiMovies from '../../api/apiMovies';
import MovieCard from './MovieCard/MovieCard';
import MovieFilter from './MovieFilter/MovieFilter.js';

import './MovieList.css';

export default function MovieList() {

  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({key: 'popular', name: 'Popular'});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

  // Infinity Scroll Filter
  const observer = useRef();
  const lastMovieElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    // Aply a logic to the observer
    observer.current = new IntersectionObserver(entries => {
      // Just use one entry (observing one node)
      if(entries[0].isIntersecting && hasMore) {
        console.log('Visible');
        setPage(prevPage => prevPage + 1);
      }
    })
    
    // Select the node to oserve 
    if (node) {
      observer.current.observe(node);
    }
  }, [loading]) //Once that the loading change to false, observe a new node

  useEffect((a) => {
    setLoading(true);
    apiMovies.getMovies({page: page, filter: filter.key}).then(res => {
      setMovies(prevMovies => [...prevMovies, ...res.data.results]);
      setHasMore(page < res.data.total_pages);
      setLoading(false);
    });
  }, [filter, page])
  
  function handleFilterChange(newFilter) {
    if (filter === newFilter)
      return;
    
    setFilter(newFilter);
    setMovies([]);
    setPage(1);
  }

  return (
    <div>
      <MovieFilter onFilterChange={handleFilterChange} filter={filter}/>
      <div className="movie-list">
        { movies.map((movie, index) => {
          if (index + 1 === movies.length) {
            return <div ref={lastMovieElementRef} key={movie.id}><MovieCard movie={movie} /></div>
          } else {
            return <div key={movie.id}><MovieCard movie={movie} /></div>
          }
        }) }
      </div>
    </div>
  );
}