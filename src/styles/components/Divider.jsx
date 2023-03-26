import styled from "styled-components";

export const Divider = styled.span`
	width: 100%;
	height: 1px;
	padding: 1px;
	background-color: ${(props) => props.theme.colors.divider};
`;
