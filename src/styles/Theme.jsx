import React from "react";
import { ThemeProvider } from "styled-components";

export default class Theme extends React.Component {
	theme = {
		colors: {
			primary: "#22262e",
			secondary: "#2e3139",
			text: "#ffffff",
			light: "#f0f0f0d5",
			gray: "#6d6d6d",
			gray_dark: "#969696",
			green: "#208d45",
			red: "#ed1c24",
			divider: "#525252",
		},
		fw: {
			th: "300",
			rg: "400",
			md: "500",
			bd: "600",
		},
	};

	render() {
		return (
			<ThemeProvider theme={this.theme}>{this.props.children}</ThemeProvider>
		);
	}
}
