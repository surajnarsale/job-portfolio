import React from 'react';
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillTwitterCircle,
} from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { Container, Wrapper, Icons } from './footer';

export default function Footer() {
	return (
		<>
			<Container>
				<Wrapper>
					<Icons>
						<a href="https://www.google.com">
							<AiFillGithub size={25} color={'white'} />
						</a>

						<a href="https://www.google.com">
							<AiFillTwitterCircle size={25} color={'white'} />
						</a>
						<a href="https://www.google.com">
							<AiFillInstagram size={25} color={'white'} />
						</a>
						<a href="https://www.google.com">
							<FaFacebook size={25} color={'white'} />
						</a>
						<a href="https://www.google.com">
							<FiDribbble size={25} color={'white'} />
						</a>
					</Icons>
				</Wrapper>
			</Container>
		</>
	);
}
