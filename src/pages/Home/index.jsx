import React, { Fragment } from "react";
import SomeCards from "../../components/SomeCards";
import * as S from "./page.styled";

import Service from "../../services";
import CharacterCard from "../../components/Card/Character";
import SimpleCard from "../../components/Card/Simple";
const srv = new Service();

export default class Home extends React.Component {
	state = {
		listCharacters: [],
		listLocations: [],
		listEpisodes: [],
		loading: true,
	};

	getRandomId = () => {
		// character: 1 - 826
		// location: 1 - 126
		// episode: 1 - 51

		let min = 1;
		let listIds = { idsCharacters: [], idsLocations: [], idsEpisodes: [] };

		const randomNumber = (max) => {
			return Math.floor(Math.random() * (max - min) + min);
		};

		for (let i = 0; i < 3; i++) {
			listIds.idsCharacters.push(randomNumber(826));
			listIds.idsLocations.push(randomNumber(126));
			listIds.idsEpisodes.push(randomNumber(51));
		}

		return listIds;
	};

	componentDidMount() {
		this.loadData(this.getRandomId());
	}

	loadData = (ids) => {
		(async () => {
			await srv
				.listSome(ids)
				.then((data) => {
					this.setState({
						listCharacters: data.characters,
						listLocations: data.locations,
						listEpisodes: data.episodes,
					});
				})
				.finally(() => {
					this.setState({
						loading: false,
					});
				});
		})();
	};

	render() {
		const { listCharacters, listLocations, listEpisodes, loading } = this.state;

		return (
			<>
				<S.Logo>
					<img src="/assets/rick-and-morty.png" alt="logo rick and morty" />
				</S.Logo>

				{loading ? (
					<S.BoxLoading>
						<S.Loading />
						Loading
					</S.BoxLoading>
				) : (
					<>
						<SomeCards title="Characters" pageLink={"/characters"}>
							{listCharacters.map((person) => (
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
						</SomeCards>

						<SomeCards title="Locations" pageLink={"/location"}>
							{listLocations.map((location) => (
								<Fragment key={location.id}>
									<SimpleCard
										type="location"
										title={location.name}
										infos={[location.type, location.dimension]}
										titleButton="residents"
									/>
								</Fragment>
							))}
						</SomeCards>

						<SomeCards title="Episodes" pageLink={"/episodes"}>
							{listEpisodes.map((item) => (
								<Fragment key={item.id}>
									<SimpleCard
										type="episode"
										alignInfos="center"
										title={item.name}
										infos={[item.air_date, item.episode]}
										titleButton="characters"
									/>
								</Fragment>
							))}
						</SomeCards>
					</>
				)}
			</>
		);
	}
}
