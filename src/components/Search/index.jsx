import React from "react";
import { IoSearch } from "react-icons/io5";
import * as S from "./search.styled";

import Service from "../../services";

const srv = new Service();

export default class Search extends React.Component {
	state = {
		searchText: "",
	};

	loadData = (text) => {
		(async () => {
			await srv.search("character", text).then(({ data }) => {
				console.log(data);
				this.setState({
					list: data.results,
				});
			});
		})();
	};

	onSearch = () => {
		this.loadData(this.state.searchText);
	};

	render() {
		const { searchText } = this.state;
		const { title } = this.props;

		return (
			<>
				<S.SearchHeader>
					<h1>{title}</h1>

					<S.SearchField>
						<input
							placeholder="ex: Vermigurber"
							type="search"
							value={searchText}
							onChange={(e) => this.setState({ searchText: e.target.value })}
						/>

						<button onClick={this.onSearch}>
							<IoSearch size={20} />
						</button>
					</S.SearchField>
				</S.SearchHeader>
			</>
		);
	}
}
