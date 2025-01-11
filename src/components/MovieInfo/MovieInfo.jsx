import { NavLink, Outlet } from "react-router-dom";
import css from "./MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
	return (
		<div className={css.movie}>
			<img
				src={`https://media.themoviedb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title || "Movie poster"}
			/>
			<div className={css.movieInfo}>
				<h2>
					{movie.title} ({movie.release_date?.split("-")[0]})
				</h2>
				<p>User score: {Math.round(movie.vote_average * 10)}%</p>
				<p>{movie.overview}</p>
				<ul className={css.genres}>
					{movie.genres?.map((genre) => (
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

export default MovieInfo;
