import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../api/tmdbApi';
import styles from '../styles/Search.module.css';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data = [], isLoading, error } = useQuery({
    queryKey: ['searchMovies', query],
    queryFn: () => searchMovies(query),
    enabled: !!query, // Only run this query if there is a search query
  });

  if (isLoading) return <div>Searching for movies...</div>;
  if (error) return <div>Error fetching search results.</div>;

  if (data.length === 0) return <div>No movies found for "{query}".</div>;

  return (
    <div className={styles.searchResults}>
      <h2>Search Results for "{query}"</h2>
      <div className={styles.movieList}>
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
