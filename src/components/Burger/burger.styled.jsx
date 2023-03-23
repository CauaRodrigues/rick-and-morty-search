import styled from "styled-components";

export const ButtonMenu = styled.button`
	width: 2rem;
	height: 2rem;

	z-index: 10;
	position: absolute;
	top: 1.5rem;
	left: 1.5rem;

	background: transparent;
	border: none;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	&:focus {
		outline: none;
	}

	span {
		width: 2rem;
		height: 0.25rem;
		position: relative;

		background: ${({ theme }) => theme.colors.gray_dark};
		border-radius: 10px;
		transition: all 0.3s linear;
		transform-origin: 1px;

		&:first-child {
			transform: ${({ open }) => (open ? "rotate(47deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-47deg)" : "rotate(0)")};
		}
	}
`;
