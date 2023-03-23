import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const LogoGroup = styled.figure`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;

	img {
		width: 64px;
	}

	figcaption {
		font-size: min(1.8rem, 5vw);
		font-weight: ${(props) => props.theme.fw.bd};
	}
`;

export const Divider = styled.span`
	width: 100%;
	height: 1px;
	background-color: ${(props) => props.theme.colors.divider};
`;

export const Navbar = styled.nav`
	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		gap: 0.3rem;
	}
`;

export const LinkGroup = styled.li`
	width: 100%;
	padding: 12px;

	display: flex;
	align-items: center;
	gap: 0.4rem;

	border-radius: 10px;
	color: ${(props) => props.theme.colors.gray_dark};
	transition: 0.5s ease-in-out;

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.text};
	}

	a {
		font-weight: ${(props) => props.theme.fw.rg};
		color: inherit;
	}
`;
