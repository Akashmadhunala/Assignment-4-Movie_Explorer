import React from 'react';
import { useQuery } from '@tanstack/react-query';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';
import { fetchMovies } from '../api/tmdbApi'; // Assuming you have this function

const Home = () => {
  const { data: movies, isLoading, error } = useQuery(['movies'], fetchMovies);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies</div>;

  return (
    <div className={styles.home}>
      <h2>Trending Movies</h2>
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
