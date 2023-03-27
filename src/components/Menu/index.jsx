import React from "react";
import { IoPerson, IoLocation, IoFilm, IoHome } from "react-icons/io5";
import * as S from "./menu.styled";

import * as SG from "../../styles/Components";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
	render() {
		return (
			<S.Header open={this.props.open} mobile={this.props.mobile}>
				<S.LogoGroup>
					<img src="/assets/rick-and-morty.png" alt="Logo Pickles Search" />

					<figcaption>Pickles Search</figcaption>
				</S.LogoGroup>

				<SG.Divider weight={0.4} />

				<S.Navbar>
					<ul>
						<Link to="/">
							<S.LinkGroup>
								<IoHome size={24} />
								<span>Home</span>
							</S.LinkGroup>
						</Link>

						<Link to="/characters">
							<S.LinkGroup>
								<IoPerson size={24} />
								<span>Characters</span>
							</S.LinkGroup>
						</Link>

						<Link to="/location">
							<S.LinkGroup>
								<IoLocation size={24} />
								<span>Locations</span>
							</S.LinkGroup>
						</Link>

						<Link to="/episodes">
							<S.LinkGroup>
								<IoFilm size={24} />
								<span>Episodes</span>
							</S.LinkGroup>
						</Link>
					</ul>
				</S.Navbar>

				<SG.Divider weight={0.4} />
			</S.Header>
		);
	}
}
