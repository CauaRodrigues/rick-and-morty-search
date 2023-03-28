import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as S from "./modal.styled";
import * as SG from "../../styles/Components";
import Service from "../../services";

const srv = new Service();

export default class ModalEpisodes extends React.Component {
	state = {
		characters: [],
		episode: {},
	};

	loadEpisode = () => {
		(async () => {
			await srv.episode(this.props.episodeId).then((data) => {
				this.setState({
					characters: data.characters,
					episode: data.episode,
				});
			});
		})();
	};

	componentDidUpdate(prevProps) {
		if (this.props.open !== prevProps.open) {
			this.loadEpisode();
		}
	}

	render() {
		const { open, close } = this.props;
		const { episode, characters } = this.state;

		return (
			<>
				{episode.name && (
					<S.Wrapper openModal={open}>
						<S.BoxModal>
							<button className="close" onClick={close}>
								<AiOutlineClose size={24} />
							</button>

							<h1>{episode.name}</h1>

							<S.SpaceInfos>
								<h2>Information</h2>

								<ul>
									<li>
										<strong>Release:</strong> {episode.air_date}
									</li>

									<li>
										<strong>Episode:</strong> {episode.episode}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>See the participants ({characters.length})</h2>
								{characters.map(
									({ id, name, status, species, gender, image }) => (
										<ul className="box" key={id}>
											<li>{name}</li>
											<li>Status: {status}</li>
											<li>Species: {species}</li>
										</ul>
									)
								)}
							</S.SpaceInfos>
						</S.BoxModal>
					</S.Wrapper>
				)}
			</>
		);
	}
}
