import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../../services/auth.service';

const PublicRoute = (props: any) => {
    return (isLogged() ? <Redirect to="/home"></Redirect> : <Route {...props}></Route>)
}
export default PublicRoute;