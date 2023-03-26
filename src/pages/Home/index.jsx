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
	};

	componentDidMount() {
		this.loadData([1, 2, 3]);
	}

	loadData = (ids) => {
		(async () => {
			await srv.listSome(ids).then((data) => {
				console.log(data);
				this.setState({
					listCharacters: data.characters,
					listLocations: data.locations,
					listEpisodes: data.episodes,
				});
			});
		})();
	};

	render() {
		const { listCharacters, listLocations, listEpisodes } = this.state;

		return (
			<>
				<S.Logo>
					<img src="/assets/rick-and-morty.png" alt="logo rick and morty" />
				</S.Logo>

				<SomeCards title="Characters" pageLink={"/characters"}>
					{listCharacters.map((person) => (
						<Fragment key={person.id}>
							<CharacterCard
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
								alignInfos="center"
								title={item.name}
								infos={[item.air_date, item.episode]}
								titleButton="characters"
							/>
						</Fragment>
					))}
				</SomeCards>
			</>
		);
	}
}
