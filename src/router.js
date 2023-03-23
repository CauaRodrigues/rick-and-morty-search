import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Search from "./pages/Search";
import Error from "./pages/Error";
import Characters from "./pages/Characters";
import Home from "./pages/Home";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
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
