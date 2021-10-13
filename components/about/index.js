import React from 'react';
import {
	Left,
	Right,
	Container,
	Wrapper,
	Description,
	Item,
	Title,
	Name,
	Quote,
	Story,
} from './about';

export default function About() {
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Item>
							<Title>Design</Title>
							<Description>
								Create digital products with unique ideas
							</Description>
						</Item>
						<Item>
							<Title>Full-Stack</Title>
							<Description>I develop full-stack apps</Description>
						</Item>
						<Item>
							<Title>SEO</Title>
							<Description>
								Boost your business with SEO optimize
							</Description>
						</Item>
					</Left>
					<Right>
						<Name>
							Hello, I'm <br />
							Suraj Narsale
						</Name>
						<Quote>
							" Every great design begin with an even better story "
						</Quote>
						<Story>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Fuga saepe ad omnis minima sequi nesciunt veniam odit dicta
							distinctio perspiciatis tenetur, ea eius vitae ducimus
							molestias possimus, maxime dolor! Excepturi. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Omnis, velit
							ad. Natus similique autem reiciendis harum adipisci animi
							recusandae distinctio saepe delectus. Possimus ipsum natus
							necessitatibus provident, impedit amet laboriosam. Lorem
							ipsum dolor sit amet consectetur, adipisicing elit.
							Repellat pariatur atque molestias aliquam ratione expedita
							voluptas illum doloribus vero repudiandae, qui tenetur sint
						</Story>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
}
