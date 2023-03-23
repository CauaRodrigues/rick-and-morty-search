import styled from "styled-components";

export const Header = styled.header`
	width: 20%;
	display: ${({ open }) => (open ? "flex" : "none")};
	flex-direction: column;
	gap: 2rem;
	z-index: 9;

	@media (max-width: 750px) {
		width: max-content;
	}

	${(props) => {
		if (props.mobile) {
			return `
				min-height: 100vh;
				padding: 2rem;
				padding-top: 8rem;

				position: absolute;
				top: 0;
				left: 0;

				background-color: #22262e;
				transition: transform 0.3s ease-in-out;
				transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
			`;
		}
	}}
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

	@media (max-width: 950px) {
		justify-content: center;

		figcaption {
			display: none;
		}
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
		justify-content: center;
		align-items: center;
		gap: 0.3rem;
	}

	a {
		width: 100%;
	}
`;

export const LinkGroup = styled.li`
	padding: 12px;

	display: flex;
	align-items: center;
	gap: 0.4rem;

	border-radius: 10px;
	color: ${(props) => props.theme.colors.gray_dark};
	transition: 0.5s ease-in-out;

	@media (min-width: 480px) and (max-width: 750px) {
		justify-content: center;

		span {
			display: none;
		}
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.text};
	}

	span {
		font-weight: ${(props) => props.theme.fw.rg};
		font-size: min(1rem, 4vw);
		color: inherit;
	}
`;
