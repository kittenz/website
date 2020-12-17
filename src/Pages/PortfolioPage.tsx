import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";

class PortfolioPage extends React.Component {
	classes: any;
	
	constructor(props: any) {
		super(props);

		this.classes = makeStyles((theme: Theme) => {
			createStyles({
				root: {
					width: "100%"
				},
				menuButton: {
					marginRight: theme.spacing(2),
				},
				title: {
					flexGrow: 1,
				},
				mainContent: {
					backgroundColor: theme.palette.background.paper,
					padding: theme.spacing(8, 0, 6)
				}
			});
		});
	}

	render = () => (
		<div></div>
	)
}

export default PortfolioPage;
