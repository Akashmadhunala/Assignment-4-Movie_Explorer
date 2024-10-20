import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { searchMovies } from '../api/tmdbApi'; // Optional
import MovieCard from '../components/MovieCard';

const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  
  const { data, isLoading, isError } = useQuery(['searchMovies', query], () =>
    fetch(searchMovies(query)).then(res => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching search results!</p>;

  return (
    <div>
      <h2>Search Results for: "{query}"</h2>
      <div>
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
