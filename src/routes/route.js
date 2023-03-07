import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoute = (props) => {
	return (
		<Routes>
			<Route {...props} element={<props.element />} />
		</Routes>
	)
};

export default AppRoute;

