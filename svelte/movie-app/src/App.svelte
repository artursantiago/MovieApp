<script>
  import { onMount } from 'svelte';
  import router from 'page';

  import MovieList from './components/MovieList/MovieList.svelte';
  import Movie from './components/Movie/Movie.svelte';
  import Login from './components/Login/Login.svelte';
  import Navigation from './components/Navigation/Navigation.svelte';

  let component;
  let params;

  router('/', () => component = MovieList);
  router('/login', () => component = Login);
  router('/movie/:id', (context, next) => {
    params = context.params
    next();
  }, () => component = Movie)

  router.start();

  onMount(() => console.log('mounted'));
</script>

<main>
  <Navigation/>
  <svelte:component this={component} params={params}/>
</main>

<style>
</style>