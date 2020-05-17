import React from 'react'
import { Route, Switch } from 'react-router-dom'
import authRoutes from './authRoutes'

const getRoutes = routes => {
    return routes.map((route, key) => (
        <Route exact path={route.path} component={route.component} />
    ))
}

function Authenticatiomlayout() {
    return (
        <Switch>
            {getRoutes(authRoutes)}
        </Switch>
    )
}

export default Authenticatiomlayout
