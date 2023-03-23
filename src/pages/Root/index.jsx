import React from "react";
import { Outlet } from "react-router-dom";

import Character from "../../components/Character";
import Service from "../../services";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import * as S from "./page.styled";

const srv = new Service();

export default class Root extends React.Component {
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
			<S.Container>
				<Menu />
				<article className="content">
					<Outlet />
					{/* {charactersList ? (
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
					)} */}
				</article>
			</S.Container>
		);
	}
}
