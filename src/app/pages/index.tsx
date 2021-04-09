import React, { createRef, useRef, useEffect } from "react";
import Head from "next/head";

import CommonMetaTags from "components/metaTags/CommonMetaTags";
import TwitterCard from "components/metaTags/TwitterCard";

import styles from "./HomePage.module.css";

interface Props {}

function HomePage(props: Props) {
	const logoContainer = useRef<HTMLDivElement>(null);
	const text = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.onreadystatechange = () => {
			if (document.readyState === "complete") {
				if (logoContainer.current) {
					logoContainer.current.className = `${styles.logoContainer} ${styles.animateLogoContainer}`
				}

				if (text.current) {
					text.current.className = `text-primary ${styles.animateText}`;
				}
			}
		}
	}, []);

	return (
		<>
			<Head>
				<title>Home • Kittenz</title>

				<CommonMetaTags />

				<meta name="description" content="Hello! I'm Kittenz, a Roblox & web developer." />
				<meta name="author" content="Kittenz" />

				<TwitterCard description="Hello! I'm Kittenz, a Roblox & web developer." />
			</Head>

			<div className="page">
				<main className="main">
					<div ref={logoContainer} className={`${styles.logoContainer} hidden`}>
						<img src="images/logo.png" className={`rounded ${styles.logo}`} />
						<h1 className={styles.logoText}>Kittenz</h1>
					</div>

					<div ref={text} className="text-primary hidden" style={{textAlign: "center"}}>
						<p>Hi! I'm Kittenz.</p>
						<p>I'm a Roblox scripter and a web developer.</p>
					</div>
				</main>
			</div>
		</>
	);
}

export default HomePage;
