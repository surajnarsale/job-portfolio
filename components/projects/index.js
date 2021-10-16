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
							<Subtitle>Admin Dashboard</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
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
							<Subtitle>Movie app with microinteraction</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
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
							<Subtitle>Ip tracker</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
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
							<Subtitle>Crptocurrency tracker</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
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
							<Subtitle>vs code theme</Subtitle>
							<Stack>
								<StackItem>React</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Node</StackItem>
								<StackItem>Vue</StackItem>
							</Stack>
							<Feature>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit sint, molestias qui nihil accusamus
								praesentium vel tenetur quisquam quas rem.
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
