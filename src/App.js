import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import { getToken } from './util/storage';

const PrivateRoute = ({component:Component, ...rest}) => {

	return (
		<Route
			{...rest}
			component={(props)=>{
				let token = getToken();
				if(!token) return <Redirect to="/auth" />
				return <Component {...props} />
			}}
		/>
	)
}

const App = () => {
	return (
		<Switch>
			<PrivateRoute path="/admin" component={AdminLayout} />
			<Route path="/auth" component={AuthLayout} />
			<Redirect from="/" to="/admin"/>
		</Switch>
	);
};

export default App;
