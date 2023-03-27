import styled from "styled-components";

export const SearchHeader = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const SearchField = styled.div`
	width: 80%;
	display: flex;

	input,
	select {
		padding: 10px 12px;
		color: ${(props) => props.theme.colors.text};

		&:focus {
			outline: none;
		}
	}

	input {
		flex-grow: 2;
		background-color: ${(props) => props.theme.colors.primary};
		font-weight: ${(props) => props.theme.fw.md};
		font-size: 0.9rem;

		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;

		&::placeholder {
			color: ${(props) => props.theme.colors.gray};
			font-weight: ${(props) => props.theme.fw.md};
		}
	}

	select {
		background-color: ${(props) => props.theme.colors.dark};
		font-weight: ${(props) => props.theme.fw.bd};
		font-size: 1rem;

		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}
`;
