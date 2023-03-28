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
	border-radius: 12px;
	overflow-y: scroll;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	::-webkit-scrollbar-track {
		background-color: ${(props) => props.theme.colors.secondary};
	}
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.colors.gray};
		border-radius: 1em;
	}

	@media (max-width: 750px) {
		width: 75%;
	}

	@media (max-width: 480px) {
		width: 90%;
	}

	button.close {
		cursor: pointer;
		background: transparent;
		color: ${(props) => props.theme.colors.text};
		align-self: flex-end;
	}

	img.avatar {
		border-radius: 50%;
	}

	h1 {
		text-align: center;
	}
`;

export const SpaceInfos = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-self: flex-start;

	h2 {
		font-weight: ${(props) => props.theme.fw.md};
	}

	li {
		font-weight: ${(props) => props.theme.fw.th};
		font-size: 1rem;
		margin: 2px;

		strong {
			font-weight: ${(props) => props.theme.fw.rg};
		}

		&.locationName {
			font-weight: ${(props) => props.theme.fw.md};
		}

		span.status {
			padding: 1.5px 6px;

			background-color: #6d6d6d29;
			border: 2px solid ${(props) => props.theme.colors.gray};
			border-radius: 6px;

			color: ${(props) => props.theme.colors.gray};
			font-weight: ${(props) => props.theme.fw.md};
			font-size: 0.9rem;

			&.Alive {
				border-color: ${(props) => props.theme.colors.green};
				color: ${(props) => props.theme.colors.green};
				background-color: #208d442b;
			}

			&.Dead {
				border-color: ${(props) => props.theme.colors.red};
				color: ${(props) => props.theme.colors.red};
				background-color: #ed1c2328;
			}
		}
	}

	.box {
		width: 100%;
		margin: 8px 0;
		padding: 12px;

		border: 2px solid ${(props) => props.theme.colors.gray};
		border-radius: 12px;

		&.character {
			display: flex;
			gap: 1rem;

			img {
				width: 120px;
			}

			ul {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}

		li:first-of-type {
			font-weight: ${(props) => props.theme.fw.bd};
			font-size: 1.1rem;
		}
	}
`;
