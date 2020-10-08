import axios from 'axios'
import config from './config'

const axiosMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: config.MOVIE_DB_API_KEY,
    language: 'en-US'
  },
})

// axiosMovies.CancelToken = axios.CancelToken;
// axiosMovies.isCancel = axios.isCancel;

export default axiosMovies;