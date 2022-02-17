import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import injectContext from "./store/appContext";

// Views
import { Signup } from "./view/Signup.jsx";
import { Login } from "./view/Login.jsx";
import { Private } from "./view/Private.jsx";
import { Error404 } from "./view/Error404.jsx";

// Layout
import Layout from "./layout/Layout.jsx";

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
							<Redirect to="/login" />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/private">
							<Private />
						</Route>
						<Route>
							<Error404 />
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(AppRouter);
