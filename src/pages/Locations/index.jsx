import React, { Fragment } from "react";

import Service from "../../services";
import * as SG from "../../styles/Components";
import SimpleCard from "../../components/Card/Simple";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";

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

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchText !== this.state.searchText) {
			this.loadLocations();
		}
	}

	loadLocations = (page = 1) => {
		(async () => {
			await srv.listLocations(page, this.state.searchText).then(({ data }) => {
				this.setState({
					locations: data.results,
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
		const { locations: listLocations, currentPage, totalPages } = this.state;

		return (
			<>
				<Search title="Locations" onSearch={this.getSearchText} />

				<SG.CardsContainer>
					{listLocations.map((location) => (
						<Fragment key={location.id}>
							<SimpleCard
								title={location.name}
								infos={[location.type, location.dimension]}
								titleButton="residents"
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
