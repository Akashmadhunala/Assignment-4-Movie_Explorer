// src/api/tmdbApi.js

const API_KEY = 'your_api_key'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// If you're using a default export, it should look like this:
export default fetchMovies; // This will allow you to import it without destructuring
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
