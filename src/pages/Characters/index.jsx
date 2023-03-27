import React, { Fragment } from "react";

import Service from "../../services";
import * as SG from "../../styles/Components";
import CharacterCard from "../../components/Card/Character";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";

const srv = new Service();

export default class Characters extends React.Component {
	state = {
		currentPage: 1,
		totalPages: 1,
		characters: [],
		searchText: "",
	};

	handlerPageChange = (pageNumber) => {
		this.loadCharacters(pageNumber);
	};

	componentDidMount() {
		this.loadCharacters();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchText !== this.state.searchText) {
			this.loadCharacters();
		}
	}

	loadCharacters = (page = 1) => {
		(async () => {
			await srv
				.listData("character", page, this.state.searchText)
				.then(({ data }) => {
					this.setState({
						characters: data.results,
						currentPage: page,
						totalPages: data.info.pages,
					});
				});
		})();
	};

	getSearchText = (text) => {
		this.setState({
			searchText: text,
		});
	};

	render() {
		const { characters: charactersList, currentPage, totalPages } = this.state;

		return (
			<>
				<Search title="Characters" onSearch={this.getSearchText} />

				<SG.CardsContainer>
					{charactersList.map((person) => (
						<Fragment key={person.id}>
							<CharacterCard
								id={person.id}
								status={person.status}
								name={person.name}
								avatar={person.image}
								gender={person.gender}
								species={person.species}
								origin={person.origin.name}
							/>
						</Fragment>
					))}
				</SG.CardsContainer>

				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={this.handlerPageChange}
				/>
			</>
		);
	}
}
