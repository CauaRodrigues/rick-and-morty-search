import styled from "styled-components";

export const Logo = styled.figure`
	width: 100%;
	display: flex;
	justify-content: center;

	@media (max-width: 480px) {
		padding-top: 5rem;
	}

	img {
		width: min(300px, 60vw);
	}
`;
