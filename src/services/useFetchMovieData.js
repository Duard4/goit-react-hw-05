import { useState, useEffect } from "react";
import { fetchMovieById, fetchMovieReviews, fetchMovieCredits } from "./api";

/**
 * Custom hook to fetch specific movie data by ID.
 * @param {number} id - The movie ID to fetch.
 * @param {string} type - The type of data to fetch: "details", "reviews", or "credits".
 * @returns {Object} { data, error }
 */
export const useFetchMovieData = (id, type) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMap = {
			details: fetchMovieById,
			reviews: fetchMovieReviews,
			credits: fetchMovieCredits,
		};

		const fetchData = async () => {
			try {
				const fetchFunction = fetchMap[type];
				if (!fetchFunction) throw new Error("Invalid fetch type");

				const response = await fetchFunction(id);
				setData(response);
			} catch (err) {
				setError(err);
			}
		};

		if (id && type) fetchData();
	}, [id, type]);

	return { data, error };
};
