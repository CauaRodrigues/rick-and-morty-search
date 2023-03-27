import { createBrowserRouter } from "react-router-dom";

import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Error from "./pages/Error";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Layout from "./Layout";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
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
				element: <Locations />,
			},
			{
				path: "/episodes",
				element: <Episodes />,
			},
		],
	},
]);
