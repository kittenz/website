import React from "react";

import logo from "../../assets/images/logo-small.png";
import styles from "./TopBar.module.css";

class TopBar extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render = () => (
		<div className={styles.TopBar}>
			{/* Topbar logo */}
			<div className={styles.Logo}>
				<img src={logo} className={`${styles.LogoImage} Rounded`} alt="Logo image" />
				<p className={styles.LogoText}>Kittenz</p>
			</div>

			{/* Navigation links */}
			<div className={styles.NavigationContainer}>
				<p className={styles.NavigationLink}>Home</p>
				<div className={styles.Divider} />
				<p className={styles.NavigationLink}>Portfolio</p>
				<div className={styles.Divider} />
				<p className={styles.NavigationLink}>Contact</p>
			</div>

			{/* Language & login buttons */}
			<div className={styles.NavigationContainer}>
				<p className={styles.NavigationLink}>Log in</p>
				<div className={styles.Divider} />
				<p className={styles.NavigationLink}>Language</p>
				<div className={styles.Divider} />
			</div>
		</div>
	);
}

export default TopBar;
