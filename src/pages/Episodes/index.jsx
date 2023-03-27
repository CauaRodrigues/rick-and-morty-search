import React, { Fragment } from "react";

import Service from "../../services";
import * as SG from "../../styles/Components";
import SimpleCard from "../../components/Card/Simple";
import Pagination from "../../components/Pagination";

const srv = new Service();

export default class Episodes extends React.Component {
	state = {
		currentPage: 1,
		totalPages: 1,
		episodes: [],
	};

	handlerPageChange = (pageNumber) => {
		this.loadLocations(pageNumber);
	};

	componentDidMount() {
		this.loadLocations();
	}

	loadLocations = (page = 1) => {
		(async () => {
			await srv.listEpisodes(page).then(({ data }) => {
				this.setState({
					episodes: data.results,
					currentPage: page,
					totalPages: data.info.pages,
				});
			});
		})();
	};

	render() {
		const { episodes: listEpisodes, currentPage, totalPages } = this.state;

		return (
			<>
				<h1>Episodes</h1>

				<SG.CardsContainer>
					{listEpisodes ? (
						listEpisodes.map((item) => (
							<Fragment key={item.id}>
								<SimpleCard
									alignInfos="center"
									title={item.name}
									infos={[item.air_date, item.episode]}
									titleButton="characters"
								/>
							</Fragment>
						))
					) : (
						<h2>Loading...</h2>
					)}
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
