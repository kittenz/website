import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
// import "./styles/App.scss";

class App extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render = () => (
		<Router data-testid="app-router">
			<Switch>
				{/* Home page */}
				<Route path="/">
					<HomePage />
				</Route>
				<Route path="/home">
					<HomePage />
				</Route>

				{/* Portfolio page */}
				<Route path="/portfolio">
					<PortfolioPage />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
