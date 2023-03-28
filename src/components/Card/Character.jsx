import React from "react";
import * as S from "./card.styled";
import Modal from "../Modal/ModalCharacter";

export default class CharacterCard extends React.Component {
	state = {
		openModal: false,
	};

	handlerModal = () => {
		this.setState({
			openModal: !this.state.openModal,
		});
	};

	render() {
		const { id, avatar, name, species, gender, origin, status } = this.props;

		return (
			<>
				<Modal
					open={this.state.openModal}
					close={this.handlerModal}
					characterId={id}
				/>

				<S.AvatarCard onClick={this.handlerModal}>
					<img
						className={`avatar ${status}`}
						src={avatar}
						alt={`avatar ${name}`}
					/>

					<div className="details">
						<h3>{name}</h3>

						<span>
							<img
								src="https://cdn-icons-png.flaticon.com/512/9672/9672524.png"
								alt="icon species"
							/>
							{species}
						</span>

						<span>
							<img
								src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
								alt="icon gender"
							/>
							{gender}
						</span>

						<span>
							<img
								src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
								alt="icon location"
							/>
							{origin}
						</span>
					</div>
				</S.AvatarCard>
			</>
		);
	}
}
