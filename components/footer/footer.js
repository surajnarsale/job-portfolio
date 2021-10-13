import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Container = styled.div`
	width: 100vw;
	background-color: #151515;
	font-size: 1rem;
`;
export const Wrapper = styled.div`
	max-width: 1300px;
	margin: 0px auto;
	width: 100%;
	height: 100px;

	@media ${device.laptopL} {
		padding: 5rem;
	}
`;

export const Icons = styled.div`
	float: right;
	display: flex;
	justify-content: space-between;
	width: 15rem;
`;
