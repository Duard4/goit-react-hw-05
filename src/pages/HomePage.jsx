import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import { useHttp } from "../hooks/useHttp";

const HomePage = () => {
	const { data, error, isLoading } = useHttp("trending", 1);
	return (
		<div>
			<h1>Trending today</h1>
			{error && <Error message={error} />}
			{isLoading && <Loader />}
			<MovieList movies={data?.results ? data.results : []}></MovieList>
		</div>
	);
};

export default HomePage;
