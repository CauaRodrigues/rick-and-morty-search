import React, { Component } from "react";
import * as S from "./header.styled";

export default class Header extends Component {
	render() {
		return (
			<S.Header>
				<img src="/assets/rick-and-morty.png" alt="rick and morty logo" />
				<h1>Rick and Morty Search</h1>
			</S.Header>
		);
	}
}
