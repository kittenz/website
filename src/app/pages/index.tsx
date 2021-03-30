import React, { createRef, useRef } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";

class Home extends React.Component {
	logoContainerRef: React.RefObject<HTMLDivElement>;
	textRef: React.RefObject<HTMLDivElement>;

	constructor(props: any) {
		super(props);

		this.logoContainerRef = createRef();
		this.textRef = createRef();
	}

	componentDidMount = () => {
		if (this.logoContainerRef && this.logoContainerRef.current) {
			this.logoContainerRef.current.className += ` ${styles.animateLogoContainer}`;
		}

		if (this.textRef && this.textRef.current) {
			this.textRef.current.className += ` ${styles.animateText}`;
		}
	}

	render = () => (
		<div className={styles.page}>
			<Head>
				<title>Kittenz • Home</title>
			</Head>

			<main className={styles.main}>
				<div ref={this.logoContainerRef} className={styles.logoContainer}>
					<img src="images/logo.png" className={`rounded ${styles.logo}`} />
					<h1 className={styles.logoText}>Kittenz</h1>
				</div>

				<div ref={this.textRef} className={`text-primary ${styles.text}`} style={{textAlign: "center"}}>
					<p>Hi! I'm Kittenz.</p>
					<br />
					<p>My website is coming soon.</p>
				</div>
			</main>
		</div>
	);
}

/*
const Home = () => {
	const logoContainerRef = useRef(null);
	const textRef = useRef(null);

	document.onreadystatechange = () => {
		if (document.readyState === "complete") {
			
		}
	}

	return (
		
	);
}
*/

export default Home;
