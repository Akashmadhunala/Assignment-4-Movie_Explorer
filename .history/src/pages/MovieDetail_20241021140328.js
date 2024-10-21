import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdbApi';
import styles from '../styles/MovieDetail.module.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(getMovieDetails(id));
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.movieDetail}>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetail;
