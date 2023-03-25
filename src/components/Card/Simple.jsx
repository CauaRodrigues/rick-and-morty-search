import React from "react";
import * as S from "./card.styled";

export default class SimpleCard extends React.Component {
	render() {
		const { title, infos } = this.props;

		return (
			<S.SimpleCard>
				<h2>{title}</h2>

				<div className="details">
					<span>{infos[0]}</span>
					<span>{infos[1]}</span>
				</div>

				<button>Residents</button>
			</S.SimpleCard>
		);
	}
}
