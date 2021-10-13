import React, { useState } from 'react';

import { Div, HamburgerWrapper, Logo } from './navbar';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Logo>S</Logo>
			<HamburgerWrapper
				open={open}
				setOpen={setOpen}
				onClick={() => {
					setOpen(!open);
					console.log(open);
				}}
			>
				<Div></Div>
				<Div></Div>
				<Div></Div>
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
