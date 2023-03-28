import React from "react";
import { IoSearch } from "react-icons/io5";
import * as S from "./search.styled";

export default class Search extends React.Component {
	state = {
		searchText: "",
	};

	render() {
		const { searchText } = this.state;
		const { title, onSearch } = this.props;

		return (
			<>
				<S.SearchHeader>
					<h1>{title}</h1>

					<S.SearchField>
						<input
							placeholder="ex: Rick"
							type="search"
							value={searchText}
							onChange={(e) => {
								this.setState({ searchText: e.target.value });
								onSearch(e.target.value);
							}}
						/>

						<button onClick={() => onSearch(searchText)}>
							<IoSearch size={20} />
						</button>
					</S.SearchField>
				</S.SearchHeader>
			</>
		);
	}
}
