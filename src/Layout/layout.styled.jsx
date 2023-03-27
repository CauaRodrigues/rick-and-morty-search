import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;

	@media (max-width: 480px) {
		padding: 0;
	}

	article {
		flex: 1;
		min-height: 100vh;
		padding: 24px 12px;
		background: ${(props) => props.theme.colors.secondary};
		border-radius: 32px;
		z-index: 0;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 2rem;

		@media (max-width: 480px) {
			padding: 12px 8px;
			border-radius: 0;
		}

		h1 {
			font-weight: ${(props) => props.theme.fw.bd};
			font-size: min(2.5rem, 10vw);
		}
	}
`;
