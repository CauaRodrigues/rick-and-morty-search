import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 1rem;
	z-index: 5;
	position: fixed;
	top: 0;
	left: 0;

	display: ${(props) => (props.openModal ? "flex" : "none")};
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.6);
`;

export const BoxModal = styled.div`
	width: 70%;
	height: 90vh;
	padding: 24px;

	position: absolute;
	right: 5%;

	z-index: 7;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 23px;
	overflow-y: scroll;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 750px) {
		width: 75%;
	}

	@media (max-width: 480px) {
		bottom: 12px;
		width: 90%;
	}

	button.close {
		cursor: pointer;
		background: transparent;
		color: ${(props) => props.theme.colors.text};
		align-self: flex-end;
	}

	img {
		border-radius: 50%;
	}
`;

export const SpaceInfos = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-self: flex-start;
`;
