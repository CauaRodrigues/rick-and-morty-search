import React from "react";
import { Link } from "react-router-dom";

import * as SG from "../../styles/components/CardsContainer";
import * as S from "./page.styled";

export default class SomeCards extends React.Component {
	render() {
		const { title, pageLink, children } = this.props;

		return (
			<S.Container>
				<h2>{title}</h2>

				<SG.CardsContainer>{children}</SG.CardsContainer>

				<Link to={`/${pageLink}`}>View More</Link>
			</S.Container>
		);
	}
}
