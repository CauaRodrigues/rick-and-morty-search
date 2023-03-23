import React, { Component, Fragment } from "react";

import Character from "../../components/Character";
import Service from "../../services";
import Header from "../../components/Header";

import * as S from "./page.styled";

const srv = new Service();

export default class Root extends Component {
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
				<Header />

				<S.Container>
					<article className="content">
						{charactersList ? (
							charactersList.map((person) => (
								<Fragment key={person.id}>
									<Character
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
					</article>
				</S.Container>
			</>
		);
	}
}
