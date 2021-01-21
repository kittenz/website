import React from "react";
import Head from "next/head";
import Link from "next/link";

import CopyrightNotice from "../components/CopyrightNotice/CopyrightNotice";

import styles from "../styles/Home.module.css";

let Home = () => {
	return (
		<div id="page-content">
			<Head>
				<title>Kittenz • Home</title>
			</Head>

			{ /* Navbar */}
			<nav className="navbar">
				<ul className="navbar-nav">
					{/* Start */}
					<li className="nav-item">
						<Link href="/"><img src="images/logo.png" width="64" height="64" className="rounded" /></Link>
					</li>

					{/* Center */}
					<li className="nav-item">
						<ul className="navbar-nav">
							<li className="nav-item"><p>About</p></li>
							<li className="nav-item"><p>Contact</p></li>
						</ul>
					</li>

					{/* End */}
					<li className="nav-item">
						<ul className="navbar-nav">
							<li className="nav-item"><Link href="/account/login">Log in</Link></li>
							<li className="nav-item"><p>Settings</p></li>
						</ul>
					</li>
				</ul>
			</nav>

			<main>

			</main>

			<footer>
				<CopyrightNotice holder="Kittenz" year={2018} />
			</footer>
		</div>
	);
}

export default Home;
