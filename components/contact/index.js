import React from 'react';
import { Container, Left, Right, Title, Wrapper } from './contact';

export default function Contact() {
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Title></Title>
						<></>
					</Left>
					<Right>
						<Header></Header>
						<Name></Name>
						<Subject></Subject>
						<Email></Email>
						<Message></Message>
						<Button>Submit</Button>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
}
