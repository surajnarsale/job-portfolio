import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	min-height: 800px;
	background-color: #151515;
	font-size: 1rem;

	@media ${device.laptopL} {
		font-size: 0.6rem;
	}
	@media ${device.tablet} {
		font-size: 0.5rem;
	}
	@media ${device.mobileL} {
		font-size: 0.4rem;
		min-height: 640px;
	}
`;
export const Wrapper = styled.div`
	max-width: 1300px;
	height: 100%;
	margin: 0px auto;
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;

	@media ${device.laptopL} {
		padding: 0 13rem;
	}
	@media ${device.tablet} {
		padding: 0 10rem;
	}
	@media ${device.mobileL} {
		padding: 0 4rem;
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 60vh;
`;

export const Author = styled.h1`
	font-weight: 600;
	font-size: 1.5em;
	text-transform: uppercase;
	letter-spacing: 0.5rem;
	color: #00ee79;
	padding: 0 0 6rem 0;

	@media ${device.mobileL} {
		padding: 0 0 2rem 0;
		margin-top: 2rem;
	}
`;

export const Title = styled.div`
	font-size: 7em;
	margin: 0;
	font-weight: 600;
	color: white;
	line-height: 8rem;

	@media ${device.mobileL} {
		line-height: 4rem;
	}
`;
export const Subtitle = styled.div`
	font-size: 1.4em;
	color: #bfbfbf;
	padding: 3rem 0 0 0;

	@media ${device.laptopL} {
		font-size: 2.4em;
	}
	@media ${device.tablet} {
		font-size: 2em;
	}
	@media ${device.mobileL} {
		font-size: 2em;
	}
`;
