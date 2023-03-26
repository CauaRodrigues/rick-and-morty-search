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

export const BoxLoading = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Loading = styled.span`
	border: 5px solid ${(props) => props.theme.colors.gray};
	border-top-color: ${(props) => props.theme.colors.red};
	border-radius: 50%;
	width: 3em;
	height: 3em;
	animation: spin 1s linear infinite;

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;
