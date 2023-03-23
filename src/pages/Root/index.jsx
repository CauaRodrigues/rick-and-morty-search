import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";
import * as S from "./page.styled";
import MediaQuery from "react-responsive";
import Burger from "../../components/Burger";

export default class Root extends React.Component {
	state = {
		open: false,
	};

	handlerMenu = () => {
		this.setState({
			open: !this.state.open,
		});
	};

	render() {
		return (
			<S.Container>
				<MediaQuery minWidth={481}>
					<Menu open={true} />
				</MediaQuery>

				<article>
					<MediaQuery maxWidth={480}>
						<Burger open={this.state.open} setOpen={this.handlerMenu} />
						<Menu open={this.state.open} mobile={true} />
					</MediaQuery>

					<Outlet />
				</article>
			</S.Container>
		);
	}
}
