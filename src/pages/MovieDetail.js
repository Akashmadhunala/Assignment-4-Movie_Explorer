import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdbApi'; // Correct path for the API call
import styles from '../styles/MovieDetail.module.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id); // Fetch full details of the movie
      setMovie(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading movie details...</div>;

  return (
    <div className={styles.movieDetail}>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.details}>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
        <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
        <p><strong>Language:</strong> {movie.original_language}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
        <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
        <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
        <p><strong>Tagline:</strong> {movie.tagline}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
