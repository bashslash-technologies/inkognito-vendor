import React from 'react'
import Layout from '../components/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import adminRoutes from './adminRoutes'

const getRoutes = routes => {
    return routes.map((route, key) => (
        <Route exact path={`/${route.path}`} component={route.component} />
    ))
}


function AdminLayout() {
    return (
        <Layout topbar={true} footer={true} loginpage={false}>
            <Switch>
                {getRoutes(adminRoutes)}
            </Switch>
        </Layout>
    )
}

export default AdminLayout
