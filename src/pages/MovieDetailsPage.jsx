import { useLocation, useParams } from "react-router-dom";
import { useHttp } from "../hooks/useHttp";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import { useRef } from "react";

const MovieDetailsPage = () => {
	const { id } = useParams();
	const { data: movie, error, isLoading } = useHttp("details", id);
	const location = useLocation();
	const backLink = useRef(location.state ?? "/");

	return (
		<section>
			{error && <Error message={error} />}
			{isLoading && <Loader />}
			<GoBackBtn link={backLink.current} />
			<MovieInfo movie={movie ? movie : {}} />
		</section>
	);
};

export default MovieDetailsPage;
