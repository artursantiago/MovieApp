<script>
  import router from 'page';
  import AuthStore from '../../../stores/AuthStore.js';
  import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies';


  const noImage = '/assets/noimage.png';
  export let movie;

  const addFavorite = (movie) => {
    alert(`${movie.title} has been added to your favorites list.`)
  }

</script>

<div class="movie-card">
  {#if $AuthStore.authenticated}
    <span class="favorite" on:click={addFavorite(movie)} title="Add to my favorite list">
      <i class="fas fa-heart"></i>
    </span>
  {/if}
  <button on:click={router('/movie/'+movie.id)} class="image">
    <img class="poster" src={movie.poster_path ? MOVIE_DB_IMAGE_URL.medium + movie.poster_path : noImage} alt="Movie Poster">
  </button>
  <div class="info">
    <div class="rating">
      {movie.vote_average}
    </div>
    <h2><button on:click={router('/movie/'+movie.id)} class="title" title={movie.title}>{movie.title}</button></h2>
    <p>{movie.release_date}</p>
  </div>
</div>

<style>
.movie-card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 200px;
}

.image {
  border: none;
  background: none;
  cursor: pointer;
  
  outline: none;
}

.image img {
  width: 200px;
  border-radius: 8px 8px;

  box-shadow: 5px 5px 30px -10px rgb(255, 255, 255, 0.6);
}

.favorite {
  position: absolute;
  top: 8px;
  right: 8px;

  color: white;

  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 50%;

  text-align: center;
  line-height: 25px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.favorite:hover {
  color: rgb(3,37,65);
  background-color: rgb(255, 255, 255, 0.7);;
}

.info {
  width: initial;
  position: relative;
  padding: 18px 10px 12px 10px;
  /* background-color: white; */
  display: flex;
  white-space: normal;
  align-content: flex-start;
  flex-wrap: wrap;

  color: white;
}

.rating {
  position: absolute;
  top: -18px;
  left: 10px;

  font-weight: 700;
  text-align: center;

  height: 32px;
  width: 32px;
  line-height: 32px;
  border: white 2px solid;
  background-color: rgb(3,37,65);
  border-radius: 50%;
}

.info h2 {
  font-size: 1.2em;
  margin: 0;
  width: 100%;
  word-wrap: normal;
  overflow-wrap: break-word;
  padding: 0;
  font-weight: 700;
  /* box-sizing: border-box; */
}


.info h2 .title {
  border: none;
  background: none;
  font-weight: 700;
  font-size: 1em;
  text-align: left;
  padding: 0;
  cursor: pointer;

  color: white;
  text-decoration: none;
  outline: none;
}

.info p {
  font-size: 1em;
  margin: 0;
  padding: 0;
  color: rgba(256,256,256,0.6);
  font-weight: 500;
}
</style>