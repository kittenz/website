import React from "react";

import TopBar from "../../Components/TopBar/TopBar";

class HomePage extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render = () => (
		<div className="App">
			<header>
				<TopBar />
			</header>

			<main>
				
			</main>
		</div>
	);
}

export default HomePage;
