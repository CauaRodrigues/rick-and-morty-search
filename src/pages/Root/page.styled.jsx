import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;

	.content {
		flex: 1;
		height: 100vh;
		background: ${(props) => props.theme.colors.secondary};
		border-radius: 32px;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}
`;
