import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Div, HamburgerWrapper, Logo } from './navbar';

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<Logo>
				<img src="/logoSVG.svg" alt="mainLogo" />
			</Logo>
			<HamburgerWrapper>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					color={'white'}
					size={25}
				/>
			</HamburgerWrapper>
		</>
	);
}
// export default function Navbar() {
// 	return (
// 		<>
// 			<Logo>
// 				<LogoBtn>
// 					<LogoBtnDiv>
// 						<MainLogo />
// 						<LogoUnderline></LogoUnderline>
// 					</LogoBtnDiv>
// 				</LogoBtn>
// 			</Logo>
// 			<HamburgerWrapper>
// 				<Hamburger>
// 					<Div1></Div1>
// 					<Div2></Div2>
// 					<Div3></Div3>
// 				</Hamburger>
// 			</HamburgerWrapper>
// 		</>
// 	);
// }
