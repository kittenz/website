import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";

class App extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render = () => (
		<Router>
			<Switch>
				{/* Home page */}
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/home" exact>
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
