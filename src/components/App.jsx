import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import "./App.css";

const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = React.lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieCast = React.lazy(() => import("./Outlet/MovieCast"));
const MovieReviews = React.lazy(() => import("./Outlet/MovieReviews"));
const MovieDetailsPage = React.lazy(() =>
	import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = React.lazy(() =>
	import("../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
	return (
		<>
			<Navigation></Navigation>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:id" element={<MovieDetailsPage />}>
						<Route path="/movies/:id/cast" element={<MovieCast />}></Route>
						<Route
							path="/movies/:id/reviews"
							element={<MovieReviews />}
						></Route>
					</Route>
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	);
}
