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
								<StackItem>Recharts</StackItem>
								<StackItem>react-router</StackItem>
							</Stack>
							<Feature>
								Unitor is a personal CMS for E-com, blog or any other
								site management.
							</Feature>
							<SocialLinks>
								<Link href="https://unitor.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
									</a>
								</Link>
								<Link href="https://github.com/surajnarsale/unitor-admin-panel">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="https://unitor.netlify.app/" target="_blank">
						<img src="/unitor.png"></img>
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
								<StackItem>Swiper</StackItem>
								<StackItem>Sass</StackItem>
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
									</a>
								</Link>
								<Link href="https://github.com/surajnarsale/remade">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="https://remadee.netlify.app/" target="_blank">
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
								<StackItem>Vue</StackItem>
								<StackItem>Axios</StackItem>
								<StackItem>Corejs</StackItem>
								<StackItem>Leaflet</StackItem>
								<StackItem>Tailwindcss</StackItem>
							</Stack>
							<Feature>
								Onip is a public ip tracker that displays loacation of
								any public IP address on map. Also it can show the
								public ip of the system by which it is accessed.
							</Feature>
							<SocialLinks>
								<Link href="https://onip.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
									</a>
								</Link>
								<Link href="https://github.com/surajnarsale/onip-iptracker">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="https://onip.netlify.app/" target="_blank">
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
								<StackItem>CoinGecko</StackItem>
							</Stack>
							<Feature>
								Minet is a realtime cryptocurrency price tracker which
								delivers realtime data with GUI.
							</Feature>
							<SocialLinks>
								<Link href="https://minet.netlify.app/">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
									</a>
								</Link>
								<Link href="https://github.com/surajnarsale/minet-cryptocurrency-price-tracker">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a href="https://minet.netlify.app/" target="_blank">
						<img src="/minet.png"></img>
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
								<StackItem>Json</StackItem>
							</Stack>
							<Feature>
								Eternals is a vs code dark theme suitable for long hours
								of coding sessions.
							</Feature>
							<SocialLinks>
								<Link href="https://marketplace.visualstudio.com/items?itemName=SurajNarsale.eternals">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<BiLinkExternal
											size={25}
											style={{ color: '#dadada' }}
										/>
									</a>
								</Link>
								<Link href="https://github.com/surajnarsale/eternals-vscode-theme">
									<a
										style={{ textDecoration: 'none' }}
										target="_blank"
									>
										<AiFillGithub
											size={25}
											style={{ color: '#dadada', marginLeft: '1em' }}
										/>
									</a>
								</Link>
							</SocialLinks>
						</Inner>
					</Left>
					<a
						href="https://marketplace.visualstudio.com/items?itemName=SurajNarsale.eternals"
						target="_blank"
					>
						<img src="/eternals.png"></img>
					</a>
				</Wrapper>
			</Container>
		</>
	);
}
