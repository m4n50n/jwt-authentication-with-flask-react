import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

// Views
import { Home } from "./views/home.jsx";

// Layout
import Layout from "./layout/layout.jsx";

// Main component
const AppRouter = () => {
	// The basename is used when your project is published in a subdirectory and not in the root of the domain
	// The basename can set on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Layout>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route>
							<h1>PAGE NOT FOUND!</h1>
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(AppRouter);
