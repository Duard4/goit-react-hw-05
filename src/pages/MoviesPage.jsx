// import { useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import { useHttp } from "../hooks/useHttp";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
	const [url, setUrl] = useSearchParams();

	const handleSearch = (inputQuery) => {
		if (url.get("query") === inputQuery) return;
		url.set("query", inputQuery);
		setUrl(url);
	};

	const query = url.get("query");
	const { data, error, isLoading } = useHttp("search", query);

	return (
		<section>
			{error && <Error message={error} />}
			{isLoading && <Loader />}
			<SearchBar onSearch={handleSearch}></SearchBar>
			<MovieList movies={data?.results ? data.results : []}></MovieList>
		</section>
	);
};

export default MoviesPage;
