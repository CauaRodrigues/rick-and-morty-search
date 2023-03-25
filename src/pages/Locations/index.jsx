import React, { Fragment } from "react";

import Service from "../../services";
import * as S from "../../styles/components/CardsContainer";
import SimpleCard from "../../components/Card/Simple";
import Pagination from "../../components/Pagination";

const srv = new Service();

export default class Locations extends React.Component {
	state = {
		currentPage: 1,
		totalPages: 1,
		locations: [],
	};

	handlerPageChange = (pageNumber) => {
		this.loadLocations(pageNumber);
	};

	componentDidMount() {
		this.loadLocations();
	}

	loadLocations = (page = 1) => {
		(async () => {
			await srv.listLocations(page).then(({ data }) => {
				this.setState({
					locations: data.results,
					currentPage: page,
					totalPages: data.info.pages,
				});
			});
		})();
	};

	render() {
		const { locations: listLocations, currentPage, totalPages } = this.state;

		return (
			<>
				<h1>Locations</h1>

				<S.CardsContainer>
					{listLocations ? (
						listLocations.map((location) => (
							<Fragment key={location.id}>
								<SimpleCard
									title={location.name}
									infos={[location.type, location.dimension]}
									titleButton="residents"
								/>
							</Fragment>
						))
					) : (
						<h2>Loading...</h2>
					)}
				</S.CardsContainer>

				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={this.handlerPageChange}
				/>
			</>
		);
	}
}
