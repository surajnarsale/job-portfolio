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
							<Subtitle>Admin Dashboard</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/remade.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>Movie app with microinteraction</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/remade.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>Ip tracker</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/onip.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>Crptocurrency tracker</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/remade.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>vs code theme</Subtitle>
							<Title>Fretastic.com</Title>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
							</Feature>
						</Inner>
					</Left>
					<a href="#">
						<img src="/eternals.png"></img>
					</a>
				</Wrapper>
			</Container>
		</>
	);
}
