import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import routes from '../routes';

const getRoutes = routes => {
    return routes.map(function(route, key){
		if(route.layout === "/admin") {
			return <Route exact path={`/admin/${route.path}`} component={route.component} />
		}
		return null
	})
}


function AdminLayout() {
    return (
		<main id="main">
			<TopBar />
			<div className="app">
				<Sidebar />
				<div
					id="main-panel"
					className="container-fluid"
				>
					<div className="wrap">
						<Switch>
							{getRoutes(routes)}
							<Redirect  from="/admin" to="/admin/dashboard"/>
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		</main>
    )
}

export default AdminLayout
