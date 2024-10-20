const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = () => {
  return `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
};

export const searchMovies = (query) => {
  return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
};

export const getMovieDetails = (id) => {
  return `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
};
