import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]); // State to store movie data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for handling errors

  // Fetch trending movies from TMDB API when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a752bfbf264b529a53535e2be696ea9c');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.results); // Set the movie data from the API response
      } catch (err) {
        setError(err.message); // Handle errors if any
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchMovies(); // Call the function to fetch movies
  }, []); // Empty dependency array means this effect runs only once, when the component mounts

  if (loading) return <div>Loading...</div>; // Show loading indicator while data is being fetched
  if (error) return <div>Error: {error}</div>; // Show error message if something goes wrong

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
