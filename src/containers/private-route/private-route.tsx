import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isLogged } from './../../services/auth.service'

const PrivateRoute = (props: RouteProps) => {
    return (isLogged() ? <Route {...props}></Route> : <Redirect to="/"></Redirect>)
}

export default PrivateRoute;