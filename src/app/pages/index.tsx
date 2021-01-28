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
							<li className="nav-item"><p>Projects</p></li>
							<li className="nav-item"><p>Portfolio</p></li>
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
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</main>

			<footer>
				<CopyrightNotice holder="Kittenz" year={2018} />
			</footer>
		</div>
	);
}

export default Home;
