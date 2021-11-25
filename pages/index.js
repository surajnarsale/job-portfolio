import React from "react";
import Head from "next/head";
import { About, Footer, Hero, Navbar, Projects } from "../components";

export default function index() {
	return (
		<>
			<Head>
				<title>surajnarsale portfolio site</title>
				<meta
					name="description"
					content="If you need to know one thing about Suraj, it's this: Design + Code =⚡️"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta charset="UTF-8" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Hero />
			<Projects />
			<About />
			<Footer />
		</>
	);
}
