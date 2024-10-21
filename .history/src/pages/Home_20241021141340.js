import React from 'react';
import { useQuery } from 'react-query';
import { fetchMovies } from '../api/tmdbApi';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = () => {
  const { data, error, isLoading, isError } = useQuery('movies', fetchMovies);

  if (isLoading) return <p>Loading movies...</p>;

  if (isError) return <p>Error fetching movies: {error.message}</p>;

  return (
    <div className={styles.movieGrid}>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
