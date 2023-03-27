import React, { Fragment } from "react";

import Service from "../../services";
import * as SG from "../../styles/Components";
import SimpleCard from "../../components/Card/Simple";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";

const srv = new Service();

export default class Episodes extends React.Component {
	state = {
		currentPage: 1,
		totalPages: 1,
		episodes: [],
		searchText: "",
	};

	handlerPageChange = (pageNumber) => {
		this.loadEpisodes(pageNumber);
	};

	componentDidMount() {
		this.loadEpisodes();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchText !== this.state.searchText) {
			this.loadEpisodes();
		}
	}

	loadEpisodes = (page = 1) => {
		(async () => {
			await srv
				.listData("episode", page, this.state.searchText)
				.then(({ data }) => {
					this.setState({
						episodes: data.results,
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
		const { episodes: listEpisodes, currentPage, totalPages } = this.state;

		return (
			<>
				<Search title="Episodes" onSearch={this.getSearchText} />

				<SG.Divider />

				<SG.CardsContainer>
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
