import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { searchMovies } from '../api/tmdbApi';
import MovieCard from '../components/MovieCard';
import styles from './Search.module.css';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, error, isLoading, isError } = useQuery(['search', query], () =>
    searchMovies(query)
  );

  if (isLoading) return <p>Loading search results...</p>;

  if (isError) return <p>Error fetching search results: {error.message}</p>;

  if (!data.results.length) return <p>No results found for "{query}"</p>;

  return (
    <div className={styles.searchGrid}>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Search;
