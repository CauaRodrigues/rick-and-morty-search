import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";
import * as S from "./page.styled";

export default class Root extends React.Component {
	render() {
		return (
			<S.Container>
				<Menu />
				<article className="content">
					<Outlet />
				</article>
			</S.Container>
		);
	}
}
