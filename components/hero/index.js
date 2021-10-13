import React from 'react';
import { Author, Container, Content, Subtitle, Title, Wrapper } from './hero';

export default function Hero() {
	return (
		<>
			<Container>
				<Wrapper>
					<Content>
						<Author>suraj narsale</Author>
						<Title>
							Full-Stack Web <br />
							Developer
						</Title>
						<Subtitle>
							I build an enjoyable web experience that solves clients
							problems.
						</Subtitle>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
}
