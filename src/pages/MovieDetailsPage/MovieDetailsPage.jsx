import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useFetchMovieData } from "../../services/useFetchMovieData";
import css from "./MovieDetailsPage.module.css";
import { IoMdArrowBack } from "react-icons/io";

const MovieDetailsPage = () => {
	const { id } = useParams();
	const { data: movie, error } = useFetchMovieData(id, "details");
	const location = useLocation();
	console.log(location);
	if (error) return <p>Error fetching movie details: {error.message}</p>;
	if (!movie) return <p>Loading...</p>;

	const backLink = location.state?.from || "/";

	return (
		<div className={css.movie}>
			<NavLink to={backLink} className={css.link}>
				<IoMdArrowBack></IoMdArrowBack>
				Back
			</NavLink>
			<img
				src={`https://media.themoviedb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title || "Movie poster"}
			/>
			<div className={css.movieInfo}>
				<h2>
					{movie.title} ({movie.release_date.split("-")[0]})
				</h2>
				<p>User score: {Math.round(movie.vote_average * 10)}%</p>
				<p>{movie.overview}</p>
				<ul className={css.genres}>
					{movie.genres.map((genre) => (
						<li key={genre.id}>{genre.name}</li>
					))}
				</ul>
			</div>
			<div className={css.movieAddInfo}>
				<p>Additional information:</p>
				<div>
					<NavLink to="cast" className={css.outletLink}>
						Cast
					</NavLink>
					<NavLink to="reviews" className={css.outletLink}>
						Reviews
					</NavLink>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default MovieDetailsPage;
