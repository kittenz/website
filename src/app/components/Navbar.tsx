import React from "react";
import Link from "next/link";

import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
	return (
			<nav className={styles.navbar}>
				<ul className={styles.navbarNav}>
					{/* Start */}
					<li className={styles.navItem}>
						<Link href="/"><img src="images/logo.png" width="64" height="64" className="rounded" /></Link>
					</li>

					{/* Center */}
					<li className={styles.navItem}>
						<ul className={styles.navbarNav}>
							<li className={styles.navItem}>
								<Link href="/projects"><p>Projects</p></Link>
							</li>
							<li className={styles.navItem}>
								<Link href="/portfolio"><p>Portfolio</p></Link>
							</li>
							<li className={styles.navItem}>
								<Link href="/contact"><p>Contact</p></Link>
							</li>
						</ul>
					</li>

					{/* End */}
					<li className={styles.navItem}>
						<ul className={styles.navbarNav}>
							<li className={styles.navItem}><Link href="/account/login">Log in</Link></li>
							<li className={styles.navItem}><p>Settings</p></li>
						</ul>
					</li>
				</ul>
			</nav>
	);
};

export default Navbar;
