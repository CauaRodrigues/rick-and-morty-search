import React from "react";
import {
	IoPerson,
	IoSearch,
	IoLocation,
	IoFilm,
	IoHome,
} from "react-icons/io5";
import * as S from "./menu.styled";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
	render() {
		return (
			<S.Header open={this.props.open} mobile={this.props.mobile}>
				<S.LogoGroup>
					<img src="/assets/rick-and-morty.png" alt="Logo Pickles Search" />

					<figcaption>Pickles Search</figcaption>
				</S.LogoGroup>

				<S.Divider />

				<S.Navbar>
					<ul>
						<S.LinkGroup>
							<IoHome size={24} />
							<Link to="/">Home</Link>
						</S.LinkGroup>

						<S.LinkGroup>
							<IoPerson size={24} />
							<Link to="/characters">Characters</Link>
						</S.LinkGroup>

						<S.LinkGroup>
							<IoSearch size={24} />
							<Link to="/search">Search</Link>
						</S.LinkGroup>

						<S.LinkGroup>
							<IoLocation size={24} />
							<Link to="/location">Locations</Link>
						</S.LinkGroup>

						<S.LinkGroup>
							<IoFilm size={24} />
							<Link to="/episodes">Episodes</Link>
						</S.LinkGroup>
					</ul>
				</S.Navbar>

				<S.Divider />
			</S.Header>
		);
	}
}
