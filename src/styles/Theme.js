import React from "react";
import { ThemeProvider } from "styled-components";

export default class Theme extends React.Component {
	theme = {
		colors: {
			primary: "#101010",
			secondary: "#303032",
			text: "#ffffff",
			gray: "#6d6d6d",
			green: "#208d45",
			red: "#ed1c24",
		},
	};

	render() {
		return (
			<ThemeProvider theme={this.theme}>{this.props.children}</ThemeProvider>
		);
	}
}
