import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	padding: 23px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	h1 {
		font-size: min(3rem, 7vw);
		font-weight: 600;
	}

	img {
		width: 250px;
	}
`;
