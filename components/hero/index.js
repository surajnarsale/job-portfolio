import React from 'react';
import { Author, Container, Content, Subtitle, Title, Wrapper } from './hero';

export default function Hero() {
	return (
		<>
			<Container>
				<Wrapper>
					<Content>
						<Author>suraj narsale</Author>
						<Title>Front-End Developer & Designer</Title>
						<Subtitle>
							I specialize in rapidly prototyping software companies and
							web applications. I talk about my journey on Twitter,
							commit code to Github, and take shots on Dribbble.
						</Subtitle>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
}
