import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMoviesByQuery } from "../../services/api";

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState("");
	const handleSearch = (searchQuery) => {
		if (query === searchQuery) {
			// toast.error("Try a different query!");
			return;
		}
		setQuery(searchQuery);
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { results } = await fetchMoviesByQuery(query);
				setMovies(results);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [query]);
	return (
		<div>
			<SearchBar onSearch={handleSearch}></SearchBar>
			<MovieList movies={movies}></MovieList>
		</div>
	);
};

export default MoviesPage;
