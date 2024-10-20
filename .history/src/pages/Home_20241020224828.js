import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/tmdbApi';
import MovieCard from '../components/MovieCard';
import styles from './styles/Home.module.css';

const Home = () => {
  // Corrected useQuery syntax
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies'], // unique key for the query
    queryFn: fetchMovies, // function to fetch data
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <div className={styles.movieGrid}>
        {data.results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
