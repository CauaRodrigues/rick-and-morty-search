import React, { Component, Fragment } from "react";

import Service from "../../services";
import CardCharacter from "../../components/CardCharacter";
import * as S from "./page.styled";
import Pagination from "../../components/Pagination";

const srv = new Service();

export default class Characters extends Component {
	state = {
		currentPage: 1,
		totalPages: 1,
		characters: [],
	};

	handlerPageChange = (pageNumber) => {
		this.loadCharacters(pageNumber);
	};

	componentDidMount() {
		this.loadCharacters();
	}

	loadCharacters = (page = 1) => {
		(async () => {
			await srv.listCharacters(page).then(({ data }) => {
				this.setState({
					characters: data.results,
					currentPage: page,
					totalPages: data.info.pages,
				});
			});
		})();
	};

	render() {
		const { characters: charactersList, currentPage, totalPages } = this.state;

		return (
			<>
				<h1>Characters</h1>

				<S.Cards>
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
				</S.Cards>

				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={this.handlerPageChange}
				/>
			</>
		);
	}
}
