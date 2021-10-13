import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	background-color: #151515;
	font-size: 1rem;
	text-align: left;
`;
export const Wrapper = styled.div`
	max-width: 1300px;
	height: 100%;
	margin: 0px auto;
	width: 100%;
	padding-top: 5rem;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-gap: 1em;
	list-style: none;
`;
export const Item = styled.li`
	background: #202022;
	padding: 2em;
	border-radius: 1em;
	margin-bottom: 1em;
`;
export const ItemContainer = styled.div`
	height: 100px;
	display: grid;
	place-content: center;
	margin: 0 auto;
`;
export const Title = styled.p`
	color: white;
	margin-top: 3rem;
	margin-bottom: 1.5rem;
	text-align: center;
`;
export const Description = styled.p`
	color: white;
	margin-bottom: 3em;
	font-size: 0.9em;
	line-height: 1.8em;
	font-weight: 500;
	text-align: center;
`;
