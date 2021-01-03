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
			</div>
		</div>
	);
}

export default TopBar;
