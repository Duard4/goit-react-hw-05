import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import css from "./MovieCast.module.css";

const MovieCast = () => {
	const { id } = useParams();
	const { data: credits, error } = useHttp("credits", id);

	if (!credits) return <p>Loading cast...</p>;
	if (error) return <p>Error: {error}</p>;
	if (credits.cast.length === 0) {
		return <p>No cast information available for this movie.</p>;
	}
	const limitedCast = credits.cast.slice(0, 10);

	return (
		<div>
			<h2>Credits</h2>
			<ul className={css.list}>
				{limitedCast.map((actor) => (
					<li key={actor.cast_id} className={css.listItem}>
						<img
							src={`https://media.themoviedb.org/t/p/w500${actor.profile_path}`}
							alt={actor.name}
						/>
						{actor.name} as {actor.character}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MovieCast;
