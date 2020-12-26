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

class HomePage extends React.Component {
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
					padding: theme.spacing(8, 8, 6)
				},
				heroContainer: {
					display: "flex",
					flexDirection: "column"
				},
				heroItem: {
					alignSelf: "center"
				}
			});
		});
	}

	render = () => (
		<div className={this.classes.root}>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={this.classes.title}>
						Kittenz's website
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={this.classes.mainContent}>
					<Container className={this.classes.heroContainer} maxWidth="sm">
						<Typography component="h1" variant="h2" color="textPrimary" className={this.classes.heroItem} align="center">
							Kittenz
						</Typography>
					</Container>
				</div>
			</main>
		</div>
	);
}

export default HomePage;
