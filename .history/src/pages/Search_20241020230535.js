import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../api/tmdbApi'; // Ensure this is correctly exported
import MovieCard from '../components/MovieCard';

const Search = ({ query }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['searchMovies', query],
    queryFn: () => searchMovies(query),
    enabled: !!query, // Only run the query if the query string exists
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Check if data and data.results are defined
  if (!data || !data.results) return <div>No results found</div>;

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
