import React, { Component } from 'react'; 
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home"

const Routes = (props) => (
	<BrowserRouter router={"/app"}>
		<Switch>
			<Route path={"/"}
				component={Home}/>
			<Route path={"/home"}
				component={Home}/>
			<Route path={"/economy"}
				component={Home}/>
			<Route path={"/science"}
				component={Home}/>
			<Route path={"/education"}
				component={Home}/>
		</Switch>
	</BrowserRouter>
) 
export default Routes;

