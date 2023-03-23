import React, { Component, Fragment } from "react";

import Service from "../../services";
import CardCharacter from "../../components/CardCharacter";

const srv = new Service();

export default class Characters extends Component {
	state = {
		characters: [],
	};

	componentDidMount() {
		(async () => {
			await srv.listCharacters().then(({ results }) => {
				this.setState({ characters: results });
			});
		})();
	}

	render() {
		const { characters: charactersList } = this.state;

		return (
			<>
				{charactersList ? (
					charactersList.map((person) => (
						<Fragment key={person.id}>
							<CardCharacter
								status={person.status}
								name={person.name}
								avatar={person.image}
								gender={person.gender}
								species={person.species}
								origin={person.origin.name}
							/>
						</Fragment>
					))
				) : (
					<h2>Error</h2>
				)}
			</>
		);
	}
}
