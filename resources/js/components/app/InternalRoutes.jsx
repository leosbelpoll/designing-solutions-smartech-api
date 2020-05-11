import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import URLMapping from "../../utils/routes";
import Home from "../ui/pages/Home";
import NotFound from "../ui/pages/NotFound";
import Header from "../ui/parts/Header";

// Projects
import ProjectList from "../business/Project/ProjectList";
import ProjectDetail from "../business/Project/ProjectDetail";

// Forms
import FormList from "../business/Form/FormList";
import FormDetail from "../business/Form/FormDetail";

// Standards
import StandardList from "../business/Standard/StandardList";
import StandardDetail from "../business/Standard/StandardDetail";
import ProjectForm from "../business/Project/ProjectForm";

export default function InternalRoutes() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    {/* Front */}
                    <Route exact path={URLMapping.LOGIN} render={() => <Redirect to={URLMapping.HOME} />} />
                    <Route exact path={URLMapping.HOME} component={Home} />

                    {/* Projects */}
                    <Route exact path={URLMapping.PROJECTS} component={ProjectList} />
                    <Route exact path={URLMapping.PROJECT_DETAIL} component={ProjectDetail} />
                    <Route exact path={URLMapping.CREATE_PROJECT} component={ProjectForm} />
                    <Route exact path={URLMapping.UPDATE_PROJECT} component={ProjectForm} />

                    {/* Forms */}
                    <Route exact path={URLMapping.FORMS} component={FormList} />
                    <Route exact path={URLMapping.FORM_DETAIL} component={FormDetail} />

                    {/* Standards */}
                    <Route exact path={URLMapping.STANDARDS} component={StandardList} />
                    <Route exact path={URLMapping.STANDARD_DETAIL} component={StandardDetail} />

                    {/* NotFound */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </>
    );
}
