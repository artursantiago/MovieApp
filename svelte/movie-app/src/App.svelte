<script>
  import { onMount } from 'svelte';
  import router from 'page';

  import MovieList from './components/MovieList/MovieList.svelte';
  import Login from './components/Login/Login.svelte';
  import Navigation from './components/Navigation/Navigation.svelte';

  let component;
  let params;

  router('/', () => component = MovieList);
  router('/login', () => component = Login);
  // router('/movie/:id', (context, next) => {
  //   params = context.params
  //   next();
  // }, () => page => Movie)

  router.start();

  onMount(() => console.log('s'));
</script>

<main>
  <Navigation/>
  <svelte:component this={component} />
</main>

<style>
</style>