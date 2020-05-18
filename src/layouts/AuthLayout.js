import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../routes'

const getRoutes = routes => {
    return routes.map((route, key) => {
		if(route.layout === "/auth") {
			return <Route path={`/auth/${route.path}`} component={route.component} />
		}
		return (<> </>)
	})
}

function Authlayout() {
    return (
        <Switch>
            {getRoutes(routes)}
        </Switch>
    )
}

export default Authlayout;
