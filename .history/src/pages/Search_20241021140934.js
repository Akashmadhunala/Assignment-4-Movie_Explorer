import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MovieCard from '../components/MovieCard';
import styles from './Search.module.css';

const fetchSearchResults = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }

  return response.json();
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, error, isLoading, isError } = useQuery(['search', query], () =>
    fetchSearchResults(query)
  );

  if (isLoading) {
    return <p>Loading search results...</p>;
  }

  if (isError) {
    return <p>Error fetching search results: {error.message}</p>;
  }

  if (!data.results.length) {
    return <p>No results found for "{query}"</p>;
  }

  return (
    <div className={styles.searchGrid}>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Search;
