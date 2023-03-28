import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as S from "./modal.styled";
import * as SG from "../../styles/Components";
import Service from "../../services";

const srv = new Service();

export default class ModalGeral extends React.Component {
	state = {
		info: {},
		characters: [],
	};

	loadData = () => {
		(async () => {
			await srv
				.getEpisodeOrLocation(this.props.endpoint, this.props.ID)
				.then((data) => {
					this.setState({
						info: data.info,
						characters: data.characters,
					});
				});
		})();
	};

	componentDidUpdate(prevProps) {
		if (this.props.open !== prevProps.open) {
			this.loadData();
		}
	}

	render() {
		const { open, close, endpoint } = this.props;
		const { info, characters } = this.state;

		return (
			<>
				{info.name && (
					<S.Wrapper openModal={open}>
						<S.BoxModal>
							<button className="close" onClick={close}>
								<AiOutlineClose size={24} />
							</button>

							<h1>{info.name}</h1>

							<S.SpaceInfos>
								<h2>Information</h2>

								<ul>
									{endpoint === "episode" ? (
										<>
											<li>
												<strong>Release:</strong> {info.air_date}
											</li>

											<li>
												<strong>Episode:</strong> {info.episode}
											</li>
										</>
									) : (
										<>
											<li>
												<strong>Type:</strong> {info.type || "(?????)"}
											</li>

											<li>
												<strong>dimension:</strong> {info.dimension}
											</li>
										</>
									)}
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Residents ({characters.length})</h2>
								{characters.map(
									({ id, name, status, species, gender, image }) => (
										<div className="box character" key={id}>
											<img src={image} alt={name} />
											<ul>
												<li>{name}</li>
												<li>
													<strong>Status:</strong>{" "}
													<span className={`status ${status}`}>{status}</span>
												</li>
												<li>
													<strong>Species:</strong> {species}
												</li>
												<li>
													<strong>Gender:</strong> {gender}
												</li>
											</ul>
										</div>
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
