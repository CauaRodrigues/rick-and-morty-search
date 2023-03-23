import styled from "styled-components";

export const Card = styled.div`
	width: 250px;
	padding: 1rem;
	z-index: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 23px;
	color: ${(props) => props.theme.colors.text};
	cursor: pointer;
	transition: ease-in-out 0.4s;

	&:hover {
		transform: translate(-0.5rem, -0.5rem);
	}

	.avatar {
		border: 3.5px solid ${(props) => props.theme.colors.gray};
		border-radius: 50%;
	}

	.Alive {
		border-color: ${(props) => props.theme.colors.green};
	}

	.Dead {
		border-color: ${(props) => props.theme.colors.red};
	}

	.info {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;

		h2 {
			text-align: center;
			font-size: min(1.3rem, 5vw);
			font-weight: ${(props) => props.theme.fw.md};
		}

		span {
			align-self: flex-start;
			margin: 5px 0;
			display: flex;
			font-size: min(1rem, 5vw);
			font-weight: ${(props) => props.theme.fw.rg};
			text-align: start;

			img {
				margin-right: 5px;
				border-radius: 0;
				width: 20px;
				height: 20px;
			}
		}
	}

	@media (max-width: 670px) {
		width: 100%;
		flex-direction: row;

		img.avatar {
			min-width: 40%;
		}

		.info h2 {
			text-align: left;
		}
	}
`;
