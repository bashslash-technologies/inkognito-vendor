import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../routes'

const getRoutes = routes => {
    return routes.map((route, key) => {
		if(route.layout === "/auth") {
			return <Route path={`/auth/${route.path}`} component={route.component} />
		}
		return null
	})
}

function Authlayout() {
    return (
        <Switch>
            {getRoutes(routes)}
            <Redirect  from="/auth" to="/auth/login"/>
        </Switch>
    )
}

export default Authlayout;
