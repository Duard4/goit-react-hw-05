import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		async function loadMoives() {
			const { results } = await fetchTrendingMovies();
			setMovies(results);
		}
		loadMoives();
	}, []);
	return (
		<div>
			<h1>Trending today</h1>
			<MovieList movies={movies}></MovieList>
		</div>
	);
};

export default HomePage;
