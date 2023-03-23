import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Router } from "./router";
import Theme from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Theme>
			<GlobalStyles />

			<RouterProvider router={Router} />
		</Theme>
	</React.StrictMode>
);
