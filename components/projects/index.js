import React from 'react';
import {
	Container,
	Feature,
	Inner,
	Left,
	SocialLinks,
	Stack,
	StackItem,
	Subtitle,
	Wrapper,
} from './project';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

export default function Projects() {
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>
								Unitor
								<br />
								Admin Dashboard
							</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Unitor is a personal CMS for E-com, blog or any other
								site management.
							</Feature>
							<SocialLinks>
								<Link href="https://remadee.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="#">
						<img src="/remade.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>
								remade <br /> Movie app with microinteraction
							</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Remade is a movie site with microinteractions integrated
								with TMDB exposed api's.
							</Feature>
							<SocialLinks>
								<Link href="https://remadee.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="#">
						<img src="/remade.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>
								onip
								<br />
								Ip tracker
							</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Onip is a public ip tracker that displays loacation of
								any public IP address on map. Also it can show the
								public ip of the system by which it is accessed.
							</Feature>
							<SocialLinks>
								<Link href="https://remadee.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="#">
						<img src="/onip.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>
								minet
								<br />
								Crptocurrency tracker
							</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Minet is a realtime cryptocurrency price tracker which
								delivers realtime data with GUI.
							</Feature>
							<SocialLinks>
								<Link href="https://remadee.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="#">
						<img src="/remade.png"></img>
					</a>
				</Wrapper>
				<Wrapper>
					<Left>
						<Inner>
							<Subtitle>
								eternals
								<br />
								vs code theme
							</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Eternals is a vs code dark theme suitable for long hours
								of coding sessions.
							</Feature>
							<SocialLinks>
								<Link href="https://remadee.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
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
