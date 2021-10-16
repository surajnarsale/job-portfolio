import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Logo = styled.div`
	top: 1.5rem;
	left: 2rem;
	width: 3rem;
	height: 3rem;
	position: fixed;
	z-index: 9999;
	cursor: pointer;
	color: white;
	font-size: 2.5em;
	font-weight: 600;
	display: grid;
	place-content: center;

	@media ${device.laptopL} {
		font-size: 2em;
		top: 2rem;
		left: 2rem;
	}
	@media ${device.tablet} {
		font-size: 1.5em;
		left: 1rem;
	}
`;
export const LogoBtnDiv = styled.div`
	position: relative;
	width: 8rem;
	height: 8rem;
	padding: 0.6rem 0.4rem;
`;
export const LogoBtn = styled.button`
	background: transparent none repeat scroll 0% 0%;
	border: medium none;
	padding: 0px;
	margin: 0px;
`;

export const HamburgerWrapper = styled.div`
	top: 1.5rem;
	right: 2rem;
	position: fixed;
	z-index: 99999;
	cursor: pointer;
	width: 3rem;
	height: 3rem;
	display: flex;
	flex-direction: column;
	padding: 0 4px;

	@media ${device.laptopL} {
		font-size: 2em;
		top: 2rem;
		right: 1rem;
		padding: 4px 4px;
	}
	@media ${device.mobileL} {
	}
`;

export const Div = styled.div`
	background: #fff;
	border-radius: 10px;
	height: 10px;
	margin: 6px 0;
	transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

	@media ${device.laptopL} {
		height: 5px;
	}
	@media ${device.tablet} {
		height: 5px;
	}

	&:nth-of-type(1) {
		width: 50%;
	}
	&:nth-of-type(2) {
		width: 100%;
	}
	&:nth-of-type(3) {
		width: 75%;
	}

	&:nth-of-type(1) {
		transform-origin: ${({ open }) => (open ? 'bottom' : null)};
		transform: ${({ open }) =>
			open ? 'rotatez(45deg) translate(8px, 11px)' : null};
	}
	&:nth-of-type(2) {
		transform-origin: ${({ open }) => (open ? 'top' : null)};
		transform: ${({ open }) => (open ? ' rotatez(-45deg)' : null)};
	}
	&:nth-of-type(3) {
		transform-origin: ${({ open }) => (open ? 'bottom' : null)};
		width: ${({ open }) => (open ? '50%' : null)};
		transform: ${({ open }) =>
			open ? 'translate(16.4px, -10px) rotatez(45deg)' : null};
	}
`;

export const LogoSvg = styled.svg``;
export const Rect1 = styled.rect``;
export const Rect2 = styled.rect``;
export const Rect3 = styled.rect``;
export const Path = styled.path``;
