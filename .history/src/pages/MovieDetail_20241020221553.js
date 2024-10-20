import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovieDetails } from '../api/tmdbApi'; // Optional

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(['movieDetails', id], () =>
    fetch(getMovieDetails(id)).then(res => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movie details!</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title} />
      <p>{data.overview}</p>
      <p>Release Date: {data.release_date}</p>
    </div>
  );
};

export default MovieDetail;
