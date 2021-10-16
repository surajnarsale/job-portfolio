import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Container = styled.div`
	width: 100vw;
	background-color: #151515;
	font-size: 1.4rem;
	text-align: left;
`;
export const Wrapper = styled.div`
	max-width: 1300px;
	height: 100%;
	margin: 0px auto;
	padding: 0px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 3em;

	& img {
		border-radius: 0.5em;
		margin-bottom: 2em;
		margin-left: 2em;
		float: right;
		max-width: 500px;
	}

	@media ${device.laptopL} {
		padding: 0 5rem;
		padding-bottom: 3em;

		& img {
			border-radius: 1em;
			margin-bottom: 2em;
			margin-left: 0;
			max-width: 500px;
		}
	}
	@media ${device.tablet} {
		flex-direction: column-reverse;

		& img {
			margin-top: 3em;
		}
	}
	@media ${device.mobileL} {
		font-size: 1rem;
		padding: 20px;

		&img {
			margin-top: 0;
		}
	}
`;

export const Left = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 3;
	padding-right: 6rem;
	@media ${device.tablet} {
		padding-right: 0rem;
	}
`;
export const Inner = styled.div`
	@media ${device.tablet} {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;
export const Subtitle = styled.p`
	text-transform: uppercase;
	font-weight: 800;
	color: #00ee79;
	letter-spacing: 0.25em;
	font-size: 1em;
`;
export const Stack = styled.div`
	/* color: white;
	font-weight: 600;
	font-size: 1em;
	margin-top: 0.4em;
	display: block;
	padding-top: 0.3em; */

	display: flex;
	flex-wrap: wrap;
	color: #bfbfbf;
	font-weight: 400;
	font-size: 0.6em;
	padding-top: 1.5em;
`;
export const StackItem = styled.div`
	margin-right: 1em;
	background-color: #202022;
	padding: 0.5em 0.8em;
	border-radius: 0.3em;
`;
export const Feature = styled.p`
	color: #bfbfbf;
	margin-bottom: 1.7em;
	font-size: 0.9em;
	line-height: 1.8em;
	font-weight: 500;
	padding-top: 1em;

	@media ${device.tablet} {
	}
`;
export const SocialLinks = styled.div``;
