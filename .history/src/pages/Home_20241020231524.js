import React from 'react';
import { useQuery } from 'react-query';
import { searchMovies } from '../api/tmdbApi'; // Use searchMovies here
import styles from './styles/Home.module.css';

const Home = () => {
    const { data, error, isLoading } = useQuery('fetchMovies', () => searchMovies('')); // Pass an empty string

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching movies</div>;

    const movies = data?.results || [];

    return (
        <div className={styles.home}>
            <h2>Trending Movies</h2>
            <div className={styles.movieList}>
                {movies.map(movie => (
                    <div key={movie.id} className={styles.movieItem}>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
