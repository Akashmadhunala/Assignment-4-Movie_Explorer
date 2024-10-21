import React from 'react';
import styles from './styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const addToWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!watchlist.some((item) => item.id === movie.id)) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      alert(`${movie.title} has been added to your watchlist!`);
    } else {
      alert(`${movie.title} is already in your watchlist.`);
    }
  };

  return (
    <div className={styles.movieCard}>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={addToWatchlist}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
