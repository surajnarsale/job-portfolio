import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';

import {
	HamburgerWrapper,
	Logo,
	LogoSvg,
	Path,
	Rect1,
	Rect2,
	Rect3,
} from './navbar';
import { motion } from 'framer-motion';

const svgVariants = {
	hidden: { y: '-50px' },
	visible: {
		y: 0,
		transition: { duration: 1 },
	},
};
const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: 'easeInOut',
		},
	},
};
const transition = { duration: 4, ease: 'easeInOut' };

export default function Navbar() {
	return (
		<>
			<Logo>
				<LogoSvg
					width="34"
					height="34"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					as={motion.svg}
					variants={svgVariants}
					initial="hidden"
					animate="visible"
				>
					<Rect1 width="20" height="20" fill="none" />
					<Path
						d="M7.65625 10.3989C8.19062 10.3989 8.80938 11.2186 10.0563 11.2186C10.7969 11.2186 11.3406 10.8361 11.3406 10.1257C11.3406 8.27869 7 9.03279 7 5.7541C7 4.0929 8.15312 3 10.0281 3C11.5094 3 12.775 3.65574 12.775 4.67213C12.7803 4.77371 12.7663 4.8754 12.7339 4.96989C12.7014 5.06437 12.6515 5.14931 12.5875 5.21858C12.5244 5.28971 12.4493 5.34487 12.367 5.3806C12.2848 5.41633 12.197 5.43187 12.1094 5.42623C11.5375 5.42623 11.0313 4.74863 9.83125 4.74863C9.1 4.74863 8.71563 5.12022 8.71563 5.68852C8.71563 7.40437 13 6.62842 13 10.0601C12.9906 11.7432 11.9031 13 9.9625 13C8.41562 13 7.00938 12.224 7.00938 11.1749C7.01093 11.0756 7.03005 10.9777 7.06554 10.8875C7.10103 10.7972 7.15212 10.7165 7.21562 10.6503C7.3291 10.5032 7.48702 10.4131 7.65625 10.3989Z"
						fill="transparent"
						strokeWidth="1"
						stroke="rgba(255, 255, 255, 0.69)"
						strokeLinecap="round"
						as={motion.path}
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={transition}
					/>
					<Rect2
						width="11"
						height="1.2"
						rx="0.5"
						transform="matrix(1 0 0 -1 3 17)"
						fill="white"
					/>
					<Rect3
						x="16"
						y="16"
						width="1.2"
						height="1.2"
						rx="0.5"
						fill="white"
					/>
				</LogoSvg>
			</Logo>
			<HamburgerWrapper>
				<Hamburger color={'white'} size={25} />
			</HamburgerWrapper>
		</>
	);
}
