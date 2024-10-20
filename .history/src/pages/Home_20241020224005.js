import React from 'react';
import { useQuery } from '@tanstack/react-query';
import tmdbApi from '../api/tmdbApi'; // Import your API helper

const Home = () => {
  const { data, error, isLoading } = useQuery('popularMovies', tmdbApi.fetchPopularMovies);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies</div>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {data.results.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
