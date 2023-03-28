import React from "react";
import * as S from "./card.styled";
import ModalGeral from "../Modal/ModalGeral";

export default class SimpleCard extends React.Component {
	state = {
		openModal: false,
	};

	handlerModal = () => {
		this.setState({
			openModal: !this.state.openModal,
		});
	};

	render() {
		const { type, id, title, infos, titleButton, alignInfos } = this.props;

		return (
			<>
				<ModalGeral
					open={this.state.openModal}
					close={this.handlerModal}
					ID={id}
					endpoint={type}
				/>

				<S.SimpleCard alignInfos={alignInfos}>
					<h3>{title}</h3>

					<div className="details">
						<span>{infos[0]}</span>
						<span>{infos[1]}</span>
					</div>

					<button
						onClick={this.handlerModal}
						title={`View all ${titleButton} on ${title}`}
					>
						{titleButton}
					</button>
				</S.SimpleCard>
			</>
		);
	}
}
