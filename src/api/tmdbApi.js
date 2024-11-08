const API_KEY = 'a752bfbf264b529a53535e2be696ea9c'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch trending movies: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !data.results) {
      throw new Error("Invalid data received from API");
    }
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error.message);
    return []; // Return empty array on error
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch movie details for ID: ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching movie details for ID: ${id}`, error.message);
    return {}; // Return empty object on error
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
      throw new Error(`Failed to search movies: ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error searching movies:", error.message);
    return []; // Return empty array on error
  }
};
