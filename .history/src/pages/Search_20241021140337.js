import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../api/tmdbApi';
import styles from '../styles/Search.module.css';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(searchMovies(query));
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.search}>
      <h2>Search Results for "{query}"</h2>
      <div className={styles.movieGrid}>
        {movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
