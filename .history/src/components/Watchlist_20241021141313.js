import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Watchlist.module.css';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <div className={styles.watchlist}>
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <ul className={styles.movieList}>
          {watchlist.map((movie) => (
            <li key={movie.id} className={styles.movieItem}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <div>
                <h3>{movie.title}</h3>
                <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
