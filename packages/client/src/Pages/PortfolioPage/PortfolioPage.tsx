import React from "react";

import TopBar from "../../Components/TopBar/TopBar";

class PortfolioPage extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render = () => (
		<div className="App">
			<header>
				<TopBar />
			</header>

			<main>
				<p>Portfolio</p>
			</main>
		</div>
	);
}

export default PortfolioPage;
