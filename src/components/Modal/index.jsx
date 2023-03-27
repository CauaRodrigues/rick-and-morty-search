import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as S from "./modal.styled";
import * as SG from "../../styles/components/Divider";
import Service from "../../services";
import { Fragment } from "react";

const srv = new Service();

export default class Modal extends React.Component {
	state = {
		character: {},
		location: {},
		origin: {},
		episodes: [],
	};

	loadCharacter = () => {
		(async () => {
			await srv.character(this.props.characterId).then((data) => {
				this.setState({
					character: data.character,
					origin: data.origin,
					location: data.location,
					episodes: data.episode,
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
		const { character, origin, location, episodes } = this.state;

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
								<h2>Information</h2>

								<ul>
									<li>
										<b>Status:</b>{" "}
										<span className={`status ${character.status}`}>
											{character.status}
										</span>
									</li>

									<li>
										<b>Specie:</b> {character.species}
									</li>

									<li>
										<b>Type:</b> {character.type || "(?????)"}
									</li>

									<li>
										<b>Gender:</b> {character.gender}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Origin</h2>
								<ul>
									<li>
										<b>Name:</b> {character.origin.name}
									</li>
									<li>
										<b>Type:</b> {origin.type || "(?????)"}
									</li>
									<li>
										<b>Dimension:</b> {origin.dimension || "(?????)"}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Last seen on</h2>

								<ul>
									<li className="locationName">{character.location.name}</li>

									<li>
										<b>Type:</b> {location.type || "(?????)"}
									</li>

									<li>
										<b>Dimension:</b> {location.dimension || "(?????)"}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Seen in the episodes</h2>
								<ul>
									{episodes.map(({ name, episode, air_date, id }) => (
										<Fragment key={id}>
											<li>{name}</li>
											<li>{episode}</li>
											<li>Release: {air_date}</li>
										</Fragment>
									))}
								</ul>
							</S.SpaceInfos>
						</S.BoxModal>
					</S.Wrapper>
				)}
			</>
		);
	}
}
