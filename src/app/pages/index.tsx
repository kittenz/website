import React from "react";
import Head from "next/head";

import CopyrightNotice from "../components/CopyrightNotice/CopyrightNotice";

import styles from "../styles/Home.module.css";

class Home extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render = () => (
		<div id="page-content">
			<Head>
				<title>Kittenz • Home</title>
			</Head>

			<header>
				<h1>Kittenz</h1>
			</header>

			<main>

			</main>

			<footer>
				<CopyrightNotice holder="Kittenz" year={2018} />
			</footer>
		</div>
	);
}

export default Home;
