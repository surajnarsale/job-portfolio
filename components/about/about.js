import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Container = styled.div`
	width: 100vw;
	background-color: #151515;
	font-size: 1rem;
	text-align: left;

	@media ${device.laptopL} {
		font-size: 0.8rem;
	}
`;
export const Wrapper = styled.div`
	max-width: 1300px;
	padding: 10rem 0rem 0rem 0rem;
	margin: 0px auto;
	width: 100%;
	display: flex;

	@media ${device.laptopL} {
		padding: 5rem;
	}
	@media ${device.tablet} {
		flex-direction: column;
	}
	@media ${device.mobileL} {
		padding: 20px;
	}
`;
export const Left = styled.div`
	flex: 1;
	margin-right: 9rem;
	@media ${device.tablet} {
		margin-right: 0;
	}
`;
export const Right = styled.div`
	flex: 1;
`;

export const Item = styled.div`
	background: #202022;
	padding: 3em;
	margin-bottom: 3em;
`;

export const Title = styled.p`
	font-size: 1.5em;
	font-weight: 600;
	color: #00ee79;
`;
export const Description = styled.p`
	color: #bfbfbf;
	font-size: 1em;
	line-height: 1.8em;
	font-weight: 400;
	padding-top: 0.5em;
	@media ${device.tablet} {
		font-size: 1.2em;
	}
`;

export const Name = styled.h1`
	font-size: 3em;
	color: white;
	@media ${device.tablet} {
		padding-top: 2em;
	}
`;
export const Quote = styled.p`
	color: white;
	padding-top: 2.5rem;
	font-size: 1em;
	font-style: italic;
`;
export const Story = styled.p`
	color: #bfbfbf;
	padding-top: 2.5rem;
	line-height: 1.8em;
`;
