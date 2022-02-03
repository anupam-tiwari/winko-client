import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Layout from './layout/Layout'
import Home from '../pages/Home'

const InternalRoutes = () => {
    return (
        <Switch>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Switch>
    )
}

export default InternalRoutes
