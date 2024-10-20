import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { searchMovies } from '../api/tmdbApi';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const { data, error, isLoading } = useQuery(
        ['searchMovies', searchTerm],
        () => searchMovies(searchTerm),
        {
            enabled: !!searchTerm, // Only run the query if searchTerm is truthy
        }
    );

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching movies</div>;

    const movies = data?.results || [];

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search for movies..."
            />
            <div>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
