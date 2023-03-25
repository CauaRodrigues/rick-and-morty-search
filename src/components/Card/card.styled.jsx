import styled from "styled-components";

const Card = styled.div`
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

	h2 {
		text-align: center;
		font-size: min(1.3rem, 5vw);
		font-weight: ${(props) => props.theme.fw.md};
	}

	.details {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;

		span {
			margin: 5px 0;
			display: flex;
			font-size: min(1rem, 5vw);
			font-weight: ${(props) => props.theme.fw.rg};
		}
	}
`;

export const AvatarCard = styled(Card)`
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

	.details {
		span {
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

export const SimpleCard = styled(Card)`
	justify-content: space-between;

	.details span {
		align-self: ${(props) => props.alignInfos};
	}

	button {
		padding: 0.8em 1.5em;
		margin: 0.3em 0;

		background-color: ${(props) => props.theme.colors.secondary};
		border-radius: 8px;
		outline: none;

		color: ${(props) => props.theme.colors.text};
		text-transform: capitalize;
		font-size: min(0.9rem, 3.8vw);
		font-weight: ${(props) => props.theme.fw.bd};

		cursor: pointer;
		transform: translate3d(0, 0, 0);
		transition: all 0.3s;

		&:hover {
			background-color: #4074b8;
			transform: translateY(2px);
			transition-duration: 0.35s;
		}
	}
`;
