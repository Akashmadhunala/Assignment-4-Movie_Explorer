import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import tmdbApi from '../api/tmdbApi';

const Search = () => {
  const [query, setQuery] = useState('');
  
  const { data, error, isLoading } = useQuery(
    ['searchMovies', query], 
    () => tmdbApi.searchMovies(query),
    {
      enabled: !!query, // Only run query if query is not empty
    }
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // Set the query state from input
    setQuery(e.target.elements.query.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies</div>;

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search for a movie..." />
        <button type="submit">Search</button>
      </form>
      {data && (
        <ul>
          {data.results.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
