import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import * as SG from "../../styles/components/CardsContainer";
import * as S from "./someCards.styled";

export default class SomeCards extends React.Component {
	render() {
		const { title, pageLink, children } = this.props;

		return (
			<S.Container>
				<h2>{title}</h2>

				<SG.CardsContainer>{children}</SG.CardsContainer>

				<S.ButtonLink>
					<Link to={`${pageLink}`}>View More</Link>

					<IoIosArrowForward size={18} />
				</S.ButtonLink>
			</S.Container>
		);
	}
}
