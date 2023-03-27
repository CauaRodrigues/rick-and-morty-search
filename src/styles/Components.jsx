import styled from "styled-components";

export const Divider = styled.span`
	width: 100%;
	padding: ${(props) => (props.weight ? `${props.weight}` : 1)}px;
	background-color: ${(props) => props.theme.colors.divider};
`;

export const CardsContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
`;
