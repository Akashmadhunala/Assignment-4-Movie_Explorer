import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/tmdbApi'; // Keep this line if fetchMovies is correctly exported
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css'; // Change the path here

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
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
