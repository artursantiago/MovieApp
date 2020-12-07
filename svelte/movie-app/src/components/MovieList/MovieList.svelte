<script>
import { onMount } from 'svelte'

import MovieCard from './MovieCard/MovieCard.svelte'
import MovieFilter from './MovieFilter/MovieFilter.svelte'
import * as apiMovies from '../../api/apiMovies'

  let movies = []
  let filter = {key: 'popular', name: 'Popular'}
  let page = 1
  let loading = true

  const handleFilterChange = (event) => {
    const newFilter = event.detail
    if (filter === newFilter)
      return
    filter = newFilter
    movies = []
    page = 1

    getMovies()
  }

  async function getMovies(){
    loading = true
    await apiMovies.getMovies({page: page, filter: filter.key})
    .then(res => {
      movies = [...movies, ...res.data.results]
      loading = false
    })
  }

  onMount(async () => {
		getMovies()
  });
  
</script>

<div>
  <MovieFilter filter={filter} on:filterChanged={handleFilterChange}/>
  <div class="movie-list">
    {#each movies as movie }
      <MovieCard movie={movie} />
    {/each}
  </div>
</div>

<style>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-items: center;

  max-width: 90%;
  margin: 0 auto;
}
</style>