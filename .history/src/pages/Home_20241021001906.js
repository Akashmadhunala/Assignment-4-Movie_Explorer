import React from 'react';
import { useQuery } from 'react-query';
import MovieCard from '../components/MovieCard';
import { getTrendingMovies } from '../api/tmdbApi';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { data, isLoading, isError } = useQuery('trendingMovies', () =>
    fetch(getTrendingMovies()).then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className={styles.home}>
      <h2>Trending Movies</h2>
      <div className={styles.movieGrid}>
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
