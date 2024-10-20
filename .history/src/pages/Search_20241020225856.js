import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../api/tmdbApi'; // Make sure this is correctly exported from tmdbApi.js
import MovieCard from '../components/MovieCard';

const Search = ({ query }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['searchMovies', query], // Use the query as part of the key
    queryFn: () => searchMovies(query), // Wrap the function in an arrow function
    enabled: !!query, // Only run the query if the query string exists
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Search Results</h1>
      <div>
        {data.results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
