<template>
  <div>
    <MovieFilter :onFilterChange="handleFilterChange" :filter="filter"/>
    <div class="movie-list">
      <div v-for="(movie, index) in movies" :key="movie.id" >
        <div v-if="movies.length == index + 1" ref="lastMovieCard">
          <MovieCard id="lastMovieCard" :movie="movie" />
        </div>
        <MovieCard v-else :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard/MovieCard';
import MovieFilter from './MovieFilter/MovieFilter';
import * as apiMovies from '../../api/apiMovies';

export default {
  components: {
    MovieCard,
    MovieFilter
  },
  
  computed: {
    watcherFilter() {
      return [this.filter, this.page];
    }
  },

  watch: {
    /**
     * Update the movies if filter or page change
     */
    watcherFilter() {
      this.getMovies();
    },
  },

  data() {
    return {
      movies: [],
      filter: {key: 'popular', name: 'Popular'},

      page: 1,
      hasMore: false,
      loading: true
    }
  },

  methods: {

    /**
     * 
     */
    async getMovies() {
      this.loading = true;
      await apiMovies.getMovies({page: this.page, filter: this.filter.key})
      .then(res => {
        this.movies =  [...this.movies, ...res.data.results];
        this.hasMore = this.page < res.data.total_pages;
        this.loading = false;
      })
    },

    /**
     * 
     */
    handleFilterChange(newFilter) {
      if (this.filter === newFilter)
        return;

      this.filter = newFilter;
      this.movies = [];
      this.page = 1;
    },

    infiniteScroll() {
      if (this.loading) return;

      const node = document.querySelector("#lastMovieCard");

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.hasMore) {
            console.log('Visible');
            this.page += 1;
          }
        })
      });

      if (node) {
        observer.observe(node);
      }
    }
  },

  beforeMount() {
    this.getMovies();
  },
  mounted() {
    this.$watch('loading', this.infiniteScroll, {immediate: true});
  }
}
</script>

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