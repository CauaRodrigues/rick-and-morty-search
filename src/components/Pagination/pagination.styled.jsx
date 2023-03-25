import styled from "styled-components";

export const BoxPagination = styled.div`
	min-width: 50%;
	min-height: 10vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	p {
		margin: 12px 0;
	}
`;

export const BoxButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Button = styled.button`
	padding: 1em;
	margin: 0.3em 0;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;
	transition: all 0.4s;
	cursor: pointer;

	font-weight: 500;
	text-transform: capitalize;

	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.light};

	&:hover {
		background-color: ${(props) => props.theme.colors.light};
		color: ${(props) => props.theme.colors.primary};
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.4;

		&:hover {
			background-color: ${(props) => props.theme.colors.primary};
			color: ${(props) => props.theme.colors.light};
		}
	}
`;
