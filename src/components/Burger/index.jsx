import React from "react";
import * as S from "./burger.styled.jsx";

export default class Burger extends React.Component {
	render() {
		return (
			<S.ButtonMenu open={this.props.open} onClick={this.props.setOpen}>
				<span />
				<span />
				<span />
			</S.ButtonMenu>
		);
	}
}
