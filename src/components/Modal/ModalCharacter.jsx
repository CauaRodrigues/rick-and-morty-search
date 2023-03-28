import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as S from "./modal.styled";
import * as SG from "../../styles/Components";
import Service from "../../services";

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

							<img
								className="avatar"
								src={character.image}
								alt={character.name}
							/>

							<h1>{character.name}</h1>

							<S.SpaceInfos>
								<h2>Information</h2>

								<ul>
									<li>
										<strong>Status:</strong>{" "}
										<span className={`status ${character.status}`}>
											{character.status}
										</span>
									</li>

									<li>
										<strong>Specie:</strong> {character.species}
									</li>

									<li>
										<strong>Type:</strong> {character.type || "(?????)"}
									</li>

									<li>
										<strong>Gender:</strong> {character.gender}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Origin</h2>
								<ul>
									<li>
										<strong>Name:</strong> {character.origin.name}
									</li>
									<li>
										<strong>Type:</strong> {origin.type || "(?????)"}
									</li>
									<li>
										<strong>Dimension:</strong> {origin.dimension || "(?????)"}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Last seen on</h2>

								<ul>
									<li className="locationName">{character.location.name}</li>

									<li>
										<strong>Type:</strong> {location.type || "(?????)"}
									</li>

									<li>
										<strong>Dimension:</strong>{" "}
										{location.dimension || "(?????)"}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Seen in the episodes ({episodes.length})</h2>
								{episodes.map(({ name, episode, air_date, id }) => (
									<ul className="box" key={id}>
										<li>{name}</li>
										<li>
											<strong>Episode:</strong> {episode}
										</li>
										<li>
											<strong>Release:</strong> {air_date}
										</li>
									</ul>
								))}
							</S.SpaceInfos>
						</S.BoxModal>
					</S.Wrapper>
				)}
			</>
		);
	}
}
