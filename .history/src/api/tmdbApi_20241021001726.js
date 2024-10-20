const API_KEY = 'a752bfbf264b529a53535e2be696ea9c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = () => `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
export const searchMovies = (query) => `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
export const getMovieDetails = (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
