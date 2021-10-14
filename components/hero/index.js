import React from 'react';
import {
	Author,
	Container,
	Content,
	Dribble,
	Github,
	Subtitle,
	Title,
	Twitter,
	Wrapper,
} from './hero';

export default function Hero() {
	return (
		<>
			<Container>
				<Wrapper>
					<Content>
						<Author>👋 suraj narsale</Author>
						<Title>Front-End Developer & Designer</Title>
						<Subtitle>
							I specialize in rapidly prototyping software companies and
							web applications. I talk about my journey on
							<Twitter> Twitter</Twitter>, commit code to
							<Github> Github</Github>, and take shots on
							<Dribble> Dribble</Dribble>.
						</Subtitle>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
}
