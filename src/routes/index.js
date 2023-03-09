import React from "react"
import { Navigate } from "react-router-dom"
import DashboardUI from "../common"
import Chart from "../style/pages/Chart"
import Lines from "../style/pages/Lines"
import InteractiveBoard from "../style/pages/InteractiveBoard"


// Authentication related pages
// import Login from "../pages/Authentication/Login";

const authProtectedRoutes = [

	{ path: "/home", element: DashboardUI },
	{ path: "/echart", element: Chart },
	{ path: "/lines", element: Lines },
	{ path: "/interactiveboard", element: InteractiveBoard },

	// this route should be at the end of all other routes
	{ path: "/", element: () => <Navigate to="/home" /> }
];

const publicRoutes = [
	// { path: "/logout", element: Logout },
	// { path: "/login", element: Login },
	// { path: ["/register", "/trial-game"], element : PreRegisterAgent},
];

export default { authProtectedRoutes, publicRoutes };
