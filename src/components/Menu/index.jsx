import React from "react";
import { IoPerson, IoSearch, IoLocation, IoFilm } from "react-icons/io5";
import * as S from "./menu.styled";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
	render() {
		return (
			<S.Header>
				<S.LogoGroup>
					<img src="/assets/rick-and-morty.png" alt="Logo Pickles Search" />

					<figcaption>Pickles Search</figcaption>
				</S.LogoGroup>

				<S.Divider />

				<S.Navbar>
					<ul>
						<S.LinkGroup>
							<IoPerson />
							<Link to="/">Characters</Link>
						</S.LinkGroup>

						<S.LinkGroup>
							<IoSearch />
							<Link to="/search">Search</Link>
						</S.LinkGroup>

						<S.LinkGroup>
							<IoLocation />
							<Link to="/location">Locations</Link>
						</S.LinkGroup>

						<S.LinkGroup>
							<IoFilm />
							<Link to="/episodes">Episodes</Link>
						</S.LinkGroup>
					</ul>
				</S.Navbar>

				<S.Divider />
			</S.Header>
		);
	}
}
