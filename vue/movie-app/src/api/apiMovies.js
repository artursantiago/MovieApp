import {default as axios} from '../axios';

export const MOVIE_DB_IMAGE_URL = {
  small: "https://image.tmdb.org/t/p/w185",
  medium: "https://image.tmdb.org/t/p/w300",
  large: "https://image.tmdb.org/t/p/w1280",
  original: "https://image.tmdb.org/t/p/original"
};

/**
 * Get a list of the current movies on TMDb by a filter
 *  - Now Playing
 *  - Popular (Default)
 *  - Top rated
 *  - Upcoming
 */
export const getMovies = params => {
  const filter = params.filter || 'popular';
  
  return axios.get(`/movie/${filter}`, {
    params: {
      page: params.page
    }
  });
}

export const getMovie = async id => {
  const res = await axios.get(`/movie/${id}`)
  return await res;
}

// export const getActors = async id => {
//   return await axios.get(`/movie/${id}/credits`);
// };

// export const getMovieImages = async id => {
//   return await axios.get(`/movie/${id}/images`, { params: { language: "null" } });
// };

// export const getRecommendations = async id => {
//   return await axios.get(`/movie/${id}/recommendations`, {
//     params: {
//       language: "null",
//       page: 1
//     }
//   });
// };