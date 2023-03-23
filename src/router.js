import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Search from "./pages/Search";
import Error from "./pages/Error";
import Characters from "./pages/Characters";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: "/characters",
				element: <Characters />,
			},
			{
				path: "/location",
				element: <Location />,
			},
			{
				path: "/search",
				element: <Search />,
			},
			{
				path: "/episodes",
				element: <Episodes />,
			},
		],
	},
]);
