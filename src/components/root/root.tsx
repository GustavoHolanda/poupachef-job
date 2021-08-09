import React from "react";

import Login from "../../pages/login";
import SupplierDetail from "../../pages/supplier-detail";
import Suppliers from "../../pages/suppliers";

import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import PrivateRoute from "../../containers/private-route";
import PublicRoute from "../../containers/public-route";


function Root() {

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/" component={Login} />
                <PrivateRoute path="/home" component={Suppliers} />
                <PrivateRoute path="/supplier-detail" component={SupplierDetail} />
                <PublicRoute path="*" component={Login} />
            </Switch>
        </Router>
    )
}

export default Root;