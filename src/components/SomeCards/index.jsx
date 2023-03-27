import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import * as SG from "../../styles/Components";
import * as S from "./someCards.styled";

export default class SomeCards extends React.Component {
	render() {
		const { title, pageLink, children } = this.props;

		return (
			<S.Container>
				<h2>{title}</h2>

				<SG.CardsContainer>{children}</SG.CardsContainer>

				<Link to={`${pageLink}`}>
					<S.ButtonLink
						onClick={() => window.scrollTo(0, 0)}
						title={`View more ${title}`}
					>
						<span>View More</span>
						<IoIosArrowForward size={18} />
					</S.ButtonLink>
				</Link>
			</S.Container>
		);
	}
}
