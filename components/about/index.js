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
	Services,
	IconWrapper,
} from './about';
import { SiAltiumdesigner } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';

export default function About() {
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Item>
							<Services>
								<Title>Design</Title>
								<Description>
									Create digital products with unique ideas
								</Description>
							</Services>
							<IconWrapper>
								<SiAltiumdesigner
									size={35}
									style={{ color: '#1bc573', margin: 'auto' }}
								/>
							</IconWrapper>
						</Item>

						<Item>
							<Services>
								<Title>Full-Stack</Title>
								<Description>I develop full-stack apps</Description>
							</Services>
							<IconWrapper>
								<FaCode
									size={35}
									style={{ color: '#1bc573', margin: 'auto' }}
								/>
							</IconWrapper>
						</Item>
						<Item>
							<Services>
								<Title>SEO</Title>
								<Description>
									Boost your business with SEO optimize
								</Description>
							</Services>
							<IconWrapper>
								<BiSearchAlt
									size={35}
									style={{ color: '#1bc573', margin: 'auto' }}
								/>
							</IconWrapper>
						</Item>
					</Left>
					<Right>
						<Name>
							👋 Hello, I'm <br />
							Suraj Narsale
						</Name>
						<Quote>
							" Every great design begin with an even better story "
						</Quote>
						<Story>
							I am a developer and UX/UI designer based in India.
							National and International customers have relied on me for
							design, implementation, and management of their digital
							products. As a freelancer, I work with web agencies,
							companies, startups and individuals to create a blueprint
							for the digital business.
						</Story>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
}
