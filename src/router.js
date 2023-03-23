import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Error from "./pages/Error";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: "/location",
				element: <Location />,
			},
			{
				path: "/episodes",
				element: <Episodes />,
			},
		],
	},
]);
