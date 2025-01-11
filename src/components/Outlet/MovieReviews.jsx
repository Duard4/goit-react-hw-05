import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
	const { id } = useParams();
	const { data: reviews, error } = useHttp("reviews", id);
	if (!reviews) return <p>Loading reviews...</p>;
	if (error) return <p>Error: {error}</p>;
	if (reviews.results.length === 0) {
		return <p>No reviews information available for this movie.</p>;
	}
	const limitedReviews = reviews.results.slice(0, 10);

	return (
		<div>
			<h2>Reviews</h2>
			<ul className={css.list}>
				{limitedReviews.map((review) => (
					<li key={review.id} className={css.listItem}>
						<p className={css.author}>Author: {review.author}</p>
						<p>{review.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MovieReviews;
