import React from 'react';
import Link from 'next/link';
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
						<Title> Designer & Full-stack developer</Title>
						<Subtitle>
							I specialize in rapidly prototyping software companies and
							web applications. I talk about my journey on
							<Link href="https://twitter.com/surajnarsale_">
								<a style={{ textDecoration: 'none' }} target="_blank">
									<Twitter> Twitter </Twitter>
								</a>
							</Link>
							commit code to
							<Link href="https://github.com/surajnarsale">
								<a style={{ textDecoration: 'none' }} target="_blank">
									<Github> Github </Github>
								</a>
							</Link>
							, and take shots on
							<Link href="https://dribbble.com/surajnarsale">
								<a style={{ textDecoration: 'none' }} target="_blank">
									<Dribble> Dribble </Dribble>
								</a>
							</Link>
							.
						</Subtitle>
					</Content>
				</Wrapper>
			</Container>
		</>
	);
}
