export const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  
  return response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to search movies');
  }

  return response.json();
};
