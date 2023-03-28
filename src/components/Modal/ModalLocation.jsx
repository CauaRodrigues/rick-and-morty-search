import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as S from "./modal.styled";
import * as SG from "../../styles/Components";
import Service from "../../services";

const srv = new Service();

export default class ModalLocation extends React.Component {
	state = {
		location: {},
		residents: [],
	};

	loadCharacter = () => {
		(async () => {
			await srv.location(this.props.locationId).then((data) => {
				this.setState({
					location: data.location,
					residents: data.residents,
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
		const { location, residents } = this.state;

		return (
			<>
				{location.name && (
					<S.Wrapper openModal={open}>
						<S.BoxModal>
							<button className="close" onClick={close}>
								<AiOutlineClose size={24} />
							</button>

							<h1>{location.name}</h1>

							<S.SpaceInfos>
								<h2>Information</h2>

								<ul>
									<li>
										<b>Type:</b> {location.type || "(?????)"}
									</li>

									<li>
										<b>dimension:</b> {location.gender}
									</li>
								</ul>
							</S.SpaceInfos>

							<SG.Divider />

							<S.SpaceInfos>
								<h2>Residents ({residents.length})</h2>
								{residents.map(
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
