import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const addToWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const isMovieInWatchlist = watchlist.some((item) => item.id === movie.id);

    if (!isMovieInWatchlist) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      alert(`${movie.title} has been added to your watchlist!`);
    } else {
      alert(`${movie.title} is already in your watchlist!`);
    }
  };

  return (
    <div className={styles.movieCard}>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
        <h3>{movie.title}</h3>
      </Link>
      <button onClick={addToWatchlist}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
