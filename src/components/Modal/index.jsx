import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as S from "./modal.styled";
import * as SG from "../../styles/components/Divider";
import Service from "../../services";

const srv = new Service();

export default class Modal extends React.Component {
	state = {
		character: {},
	};

	loadCharacter = () => {
		(async () => {
			await srv.character(this.props.characterId).then(({ data }) => {
				this.setState({
					character: data,
				});
			});
		})();
	};

	componentDidUpdate(prevProps) {
		if (this.props.open !== prevProps.open) {
			this.loadCharacter();
		}
	}

	render() {
		const { open, close } = this.props;
		const { character } = this.state;

		return (
			<>
				{character.name && (
					<S.Wrapper openModal={open}>
						<S.BoxModal>
							<button className="close" onClick={close}>
								<AiOutlineClose size={24} />
							</button>

							<img src={character.image} alt={character.name} />

							<h1>{character.name}</h1>

							<S.SpaceInfos>
								<h2>Informations</h2>

								<span className="status">Status: {character.status}</span>
								<span>Specie: {character.species}</span>
								<span>Type: {character.type}</span>
								<span>Gender: {character.gender}</span>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Origin</h2>
								<span>Name: {character.origin.name}</span>
								<span>Type: location.type</span>
								<span>Dimension: location.dimenson</span>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Last seen on</h2>
								<span>{character.location.name}</span>
								<span>Type: location.type</span>
								<span>Dimension: location.dimenson</span>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Seen in the episodes</h2>
								<span>episode.name</span>
								<span>episode.episode</span>
								<span>Release: episode.air_date</span>
							</S.SpaceInfos>
						</S.BoxModal>
					</S.Wrapper>
				)}
			</>
		);
	}
}
