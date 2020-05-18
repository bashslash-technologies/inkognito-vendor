import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import Tempo from "./containers/mainbuilder/mainbuilder";

const App = () => {
	return (
		<Switch>
			<Route path="/tempo" component={Tempo} />
			<Route path="/admin" component={AdminLayout} />
			<Route path="/auth" component={AuthLayout} />
			<Redirect from="/" to="/admin" />
		</Switch>
	);
};

export default App;
