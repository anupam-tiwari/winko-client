import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Layout from './layout/Layout'
import Home from '../pages/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path='/home' exact component={Layout}/>
            {/* <Route path='/dashboard' exact component={Dashboard}/> */}
            {/* <Route path='/customers' component={Customers}/> */}
        </Switch>
    )
}

export default Routes
