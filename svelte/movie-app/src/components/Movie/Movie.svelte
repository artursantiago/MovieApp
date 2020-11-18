<script>
import { onDestroy, onMount } from 'svelte';
import { getMovie, MOVIE_DB_IMAGE_URL } from '../../api/apiMovies'

  const noImage = '/assets/noimage.png';
  const cinemaBG = '/assets/cinema.jpg';

  let movie = {
    genres: [],
  };
  export let params;

  const getMovieDetails = () => {
    getMovie(params.id)
    .then(result => {
      movie = result.data;
      document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0, .5)), url(${result.data.backdrop_path ? MOVIE_DB_IMAGE_URL.large + result.data.backdrop_path : cinemaBG})`
    })
    .catch(error => {
      console.log(error);
    })
  }

  onMount(() => {
    getMovieDetails();
  } );
  onDestroy(() => document.body.style.backgroundImage = `url(${cinemaBG})`);

</script>

<div class="wrapper" style="color: white">
  <div class="poster">
    <img src={movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage} alt=""/>
  </div>
  <div class="container">
    <div class="details">
      <div class="info">
        <div class="title">
          <h2>{movie.title ? movie.title : movie.original_title}</h2>
          <p>{movie.tagline}</p>
        </div>
        <div class="rating">
          <span>{movie.vote_average}</span>
        </div>
      </div>
      
      <div>
        <button class="btn-favorites btn-on">
          <i class="far fa-bookmark" aria-hidden="true"></i>
          Add to my favorites
        </button>
      </div>
      
      <p class="overview">{movie.overview}</p>
      
      <div class="genres">
        Genres:
        {#each movie.genres as genre}
          <span key={genre.id}>{genre.name}</span>
        {/each}
      </div>
    </div>
    
    <div class="others-info">
      <div>
        <i class="fa fa-clock-o movie__icon" aria-hidden="true"></i>
        Release Date: <span><b>{movie.release_date}</b></span>
      </div>
      <div>
        <i class="fas fa-history movie__icon" aria-hidden="true"></i>
        Duration: <span><b>{movie.runtime}</b></span>
      </div>
      <div>
        <i class="fa fa-money movie__icon" aria-hidden="true"></i>
        Revenue:  <span><b>{movie.revenue}</b></span>
      </div>
    </div>
  </div>
</div>

<style>
.wrapper {
  display: flex;
  width: 75%;
  margin: 30px auto 0;

  background-color: rgb(0, 0, 0, 0.7);
}

.wrapper .container {
  position: relative;
  display: flex;
  flex-direction: column;
}

.details {
  padding: 12px 24px;
}

.details .info {
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.details .info .title {
  flex: 90%;
}

.details .info h2 {
  font-size: 2rem;
  white-space: normal;
}

.details .info p {
  font-size: 1.25rem;
}

.details .rating{
  top: inherit;
  position: inherit;

  margin-left: auto;
  display: flex;
  align-self: center;
}

.details .rating span{
  margin: 0 auto;
}

.btn-favorites {
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity ease 0.2s;
  outline: none;
}

.btn-favorites i {
  padding-right: 2px;
}

.btn-on {
  background-color: rgb(40, 167, 69);
  border-color: rgb(40, 167, 69);
  transition: background-color ease 0.2s;
}

.btn-on:hover {
  background-color: rgba(40, 167, 69, 0.5);
  transition: background-color ease 0.2s;
}

.btn-off {
  background-color: #6c757d;
  border-color: #6c757d;
}


.details .overview {
  font-size: 1.2em;
  font-weight: 300;
  margin-bottom: 20px;
}

.details .genres {
  margin-bottom: 19.2px;
}

.details .genres span {
  margin-left: 10px;
  list-style: none;

  color: white;
  font-weight: 500;
  background-color: #426cb5;

  padding: 2px 4px;
  border-radius: .25rem;
}

.others-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 12%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  padding: 0 14px;
  box-sizing: border-box;
}

.others-info i{
  margin-right: 5px;
}

.others-info span{
  margin-left: 5px;
}
</style>