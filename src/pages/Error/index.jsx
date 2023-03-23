import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError();

	return (
		<main>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>

			<p>{error.statusText || error.message}</p>
		</main>
	);
}
