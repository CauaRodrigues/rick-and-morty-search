import React from "react";
import * as S from "./page.styled";
import * as SG from "../../styles/Components";

export default class Search extends React.Component {
	state = {
		searchText: "",
		selectedSearchType: "character",
	};

	render() {
		const { searchText, selectedSearchType } = this.state;
		return (
			<>
				<S.SearchHeader>
					<h1>Search</h1>

					<S.SearchField>
						<input
							placeholder="ex: Vermigurber"
							type="search"
							value={searchText}
							onChange={(e) => this.setState({ searchText: e.target.value })}
						/>
						<select
							value={selectedSearchType}
							onChange={(e) =>
								this.setState({ selectedSearchType: e.target.value })
							}
							defaultValue={selectedSearchType}
						>
							<option value="character">Character</option>
							<option value="location">Location</option>
							<option value="episode">Episode</option>
						</select>
					</S.SearchField>
				</S.SearchHeader>

				<SG.Divider weight={1.5} />

				<SG.CardsContainer></SG.CardsContainer>
			</>
		);
	}
}
