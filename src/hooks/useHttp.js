import { useState, useEffect } from "react";
import * as api from "../services/api";

/**
 * Custom hook to fetch specific movie data by ID.
 * @param {number} id - The movie ID to fetch.
 * @param {string} type - The type of data to fetch: "details", "reviews", or "credits".
 * @returns {Object} { data, error }
 */
export const useHttp = (type, param = "") => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchMap = {
			trending: api.fetchTrendingMovies,
			search: api.fetchMoviesByQuery,
			details: api.fetchMovieById,
			reviews: api.fetchMovieReviews,
			credits: api.fetchMovieCredits,
		};

		const fetchData = async () => {
			if (param === null) return;
			try {
				setIsLoading(true);
				const fetchFunction = fetchMap[type];
				if (!fetchFunction) throw new Error("Invalid fetch type");
				const response = await fetchFunction(param);
				setData(response);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		if (param && type) fetchData();
	}, [param, type]);

	return { data, error, isLoading };
};
