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
						<a href="https://github.com/surajnarsale" target="_blank">
							<AiFillGithub size={25} color={'white'} />
						</a>

						<a href="https://twitter.com/surajnarsale_" target="_blank">
							<AiFillTwitterCircle size={25} color={'white'} />
						</a>
						<a href="https://github.com/surajnarsale" target="_blank">
							<AiFillInstagram size={25} color={'white'} />
						</a>
						<a href="https://github.com/surajnarsale" target="_blank">
							<FaFacebook size={25} color={'white'} />
						</a>
						<a href="https://dribbble.com/surajnarsale" target="_blank">
							<FiDribbble size={25} color={'white'} />
						</a>
					</Icons>
				</Wrapper>
			</Container>
		</>
	);
}
