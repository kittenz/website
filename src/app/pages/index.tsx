import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<div className={styles.page}>
			<Head>
				<title>Kittenz • Home</title>
			</Head>

			<main className={styles.main}>
				<div className={styles.logoContainer}>
					<img src="images/logo.png" className={`rounded ${styles.logo}`} />
					<h1 className={styles.logoText}>Kittenz</h1>
				</div>

				<div className={`text-primary ${styles.text}`} style={{textAlign: "center"}}>
					<p>Hi! I'm Kittenz.</p>
					<br />
					<p>My website is coming soon.</p>
				</div>
			</main>
		</div>
	);
}

export default Home;
