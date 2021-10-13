import React from 'react';
import {
	Container,
	Feature,
	Inner,
	Left,
	Subtitle,
	Title,
	Wrapper,
} from './project';

export default function Projects() {
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>Guitar App</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/fretty.jpg"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>Guitar App</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/fretty.jpg"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>Guitar App</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/fretty.jpg"></img>
					</a>
				</Wrapper>
			</Container>
		</>
	);
}
