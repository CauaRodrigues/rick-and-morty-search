import React, { Component } from "react";
import * as S from "./header.styled";

export default class Header extends Component {
	render() {
		return (
			<S.Header>
				<img src="/assets/logo.png" alt="rick and morty logo" />
				<h1>Pickles Search</h1>
			</S.Header>
		);
	}
}
