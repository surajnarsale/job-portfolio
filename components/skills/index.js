import React from 'react';
import {
	Container,
	Description,
	Item,
	ItemContainer,
	List,
	Title,
	Wrapper,
} from './skills';

export default function Skills() {
	return (
		<>
			<Container>
				<Wrapper>
					<List>
						<Item>
							<ItemContainer>
								<img src="/icon-ux.svg" alt="UI/UX Icon" />
							</ItemContainer>
							<Title>UI UX Design</Title>
							<Description>
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit. Asperiores, odit?
							</Description>
						</Item>
						<Item>
							<ItemContainer>
								<img src="/icon-frontend.svg" alt="UI/UX Icon" />
							</ItemContainer>
							<Title>UI UX Design</Title>
							<Description>
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit. Asperiores, odit?
							</Description>
						</Item>
						<Item>
							<ItemContainer>
								<img src="/icon-logo.svg" alt="UI/UX Icon" />
							</ItemContainer>
							<Title>UI UX Design</Title>
							<Description>
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit. Asperiores, odit?
							</Description>
						</Item>
					</List>
				</Wrapper>
			</Container>
		</>
	);
}
