<template>
  <div class="movie-card" :style="{backgroundImage: `url(${movie.poster_path ? mediumPoster + movie.poster_path : noImage})`}">

    <button class="movie-card__favorite" title="Add to my favorite list"><i class="fas fa-heart"></i></button>

    <div class="movie-card__rating">
      {{movie.vote_average}}
    </div>
    
    <div class="movie-card__info">
      <h4>{{movie.title}}</h4>
      <span>{{movie.release_date}}</span>
    </div>
  </div>
</template>

<script>
import {MOVIE_DB_IMAGE_URL} from '../../../api/apiMovies';
import noImage from './noimage.png';

export default {
  props: ['movie'],

  computed: {
    // The variables could not be loaded directly into html
    mediumPoster() {
      return MOVIE_DB_IMAGE_URL.medium;
    },
    noImage() {
      return noImage;
    }
  },
}
</script>

<style scoped>
.movie-card {
  position: relative;

  background-size: contain;
  width: 200px;
  height: 300px;

  border-radius: 8px 8px;
  margin-bottom: 50px;
}

.movie-card__favorite {
  position: absolute;
  padding: 0;
  right: 5px;
  top: 4px;

  height: 24px;
  width: 24px;

  background: none;
  border: none;  
  background-color: rgb(0, 0, 0, 0.3);
  border-radius: 50%;

  cursor: pointer;
}

.movie-card__favorite i {
  width: 16px;
  text-align: center;
  color: rgb(255, 255, 255, 0.9);
}

.movie-card__rating {
  position: absolute;
  left: 5px;
  bottom: -17px;

  border-radius: 50%;
  border: 2px yellow solid;
  background-color: #414141;
  display: inline-block;

  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 34px;

  color: #fff;
  font-weight: 500;
}

.movie-card__info {
  position: absolute;
  bottom: -60px;

  margin-left: 16px;
}

.movie-card__info h4 {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0px;
}

.movie-card__info span {
  font-weight: 300;
}
</style>