import React from "react";
import { Route, Redirect } from "react-router-dom";
import { gStore, gCookieKey } from 'Utils/globalStorage';

const AppRoute = ({ component: Component, layout: Layout, isAuthProtected, ...rest }) => (
		<Route {...rest} render={props => {
			if (isAuthProtected && !gStore.get(gCookieKey.token)) {
				return (
					<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
				);
			}

			return (
				<Layout>
					<Component {...props} />
				</Layout>
			);
		}} />
	);

export default AppRoute;

