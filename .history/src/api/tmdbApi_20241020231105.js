import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
    if (!query) return; // Guard clause for empty query
    try {
        const response = await axios.get(`${API_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });
        return response.data; // Return the full response
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error; // Throw the error to be handled in the component
    }
};
