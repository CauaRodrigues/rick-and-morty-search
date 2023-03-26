import styled from "styled-components";

export const Container = styled.section`
	margin: 1.2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const ButtonLink = styled.button`
	padding: 0.8em 1.5em;
	margin: 0.3em 0;
	position: relative;
	z-index: 1;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.3em;

	background-color: ${(props) => props.theme.colors.blue_dark};
	border-radius: 8px;
	outline: none;

	color: ${(props) => props.theme.colors.text};
	text-transform: capitalize;
	font-size: min(0.9rem, 3.8vw);
	font-weight: ${(props) => props.theme.fw.bd};
	cursor: pointer;
	transition: all 0.5s;

	&:hover {
		background-color: ${(props) => props.theme.colors.blue};
	}

	a {
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
	}
`;
