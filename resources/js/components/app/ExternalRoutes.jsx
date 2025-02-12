import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import URLMapping from "../../utils/routes";
import Login from "../app/Login";

export default function ExternalRoutes() {
    return (
        <Switch>
            <Route exact path={URLMapping.LOGIN} component={Login} />
            <Route path="*" render={() => <Redirect to={URLMapping.LOGIN}/>} />
        </Switch>
    );
}
