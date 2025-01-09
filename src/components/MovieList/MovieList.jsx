import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
	const location = useLocation();

	return (
		<ul className={css.movieList}>
			{movies.map((movie) => {
				return (
					<li key={`${movie.id}`}>
						<Link
							to={`/movies/${movie.id}`}
							state={{ from: location.pathname }}
						>
							{movie.title}
							{/* <img
								src={`https://media.themoviedb.org/t/p/w150_and_h225_bestv2${movie.poster_path}`}
							/> */}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default MovieList;
