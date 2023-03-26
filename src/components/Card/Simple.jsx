import React from "react";
import * as S from "./card.styled";

export default class SimpleCard extends React.Component {
	render() {
		const { title, infos, titleButton, alignInfos } = this.props;

		return (
			<S.SimpleCard alignInfos={alignInfos}>
				<h3>{title}</h3>

				<div className="details">
					<span>{infos[0]}</span>
					<span>{infos[1]}</span>
				</div>

				<button>{titleButton}</button>
			</S.SimpleCard>
		);
	}
}
