import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const createHeaders = () => ({
	accept: "application/json",
	Authorization: import.meta.env.VITE_TMDB_API_KEY,
});

const apiRequest = async (endpoint, params = {}) => {
	try {
		const { data } = await axios.get(endpoint, {
			headers: createHeaders(),
			params,
		});
		return data;
	} catch (error) {
		console.error(`Error fetching data from ${endpoint}:`, error);
		throw error;
	}
};

/**
 * Fetch trending movies for the day.
 * @returns {<Object>} The response data containing trending movies.
 */
export const fetchTrendingMovies = () => {
	return apiRequest("/trending/movie/day");
};

/**
 * Fetch movies based on a search query.
 * @param {string} query - The search term for movies.
 * @returns {<Object>} The response data containing movies matching the query.
 */
export const fetchMoviesByQuery = (query) => {
	const params = {
		query,
		page: 1,
	};
	return apiRequest("/search/movie", params);
};

/**
 * Fetch movie details by ID.
 * @param {number} id - The unique ID of the movie.
 * @returns {<Object>} The response data containing movie details.
 */
export const fetchMovieById = (id) => {
	return apiRequest(`/movie/${id}`);
};

/**
 * Fetch reviews for a specific movie by ID.
 * @param {number} id - The unique ID of the movie.
 * @returns {<Object>} The response data containing movie reviews.
 */
export const fetchMovieReviews = (id) => {
	return apiRequest(`/movie/${id}/reviews`, { page: 1 });
};

/**
 * Fetch credits (cast and crew) for a specific movie by ID.
 * @param {number} id - The unique ID of the movie.
 * @returns {<Object>} The response data containing movie credits.
 */
export const fetchMovieCredits = (id) => {
	return apiRequest(`/movie/${id}/credits`);
};
