import styled from "styled-components";

export const Divider = styled.span`
	width: 100%;
	height: 1px;
	z-index: 10;
	background-color: ${(props) => props.theme.colors.red};
`;
