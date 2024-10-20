import React from 'react';
import { useQuery } from 'react-query';
import { getTrendingMovies } from '../api/tmdbApi'; // Optional
import MovieCard from '../components/MovieCard';

const Home = () => {
  const { data, isLoading, isError } = useQuery('trendingMovies', () =>
    fetch(getTrendingMovies()).then(res => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movies!</p>;

  return (
    <div>
      <h2>Trending Movies</h2>
      <div>
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
