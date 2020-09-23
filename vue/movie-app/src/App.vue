<template>
  <MovieList />
</template>

<script>
import MovieList from './components/MovieList/MovieList'

export default {
  name: 'App',
  components: {
    MovieList
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
