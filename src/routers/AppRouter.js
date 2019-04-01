import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import AddCardPage from '../components/AddCardPage';
import EditCardPage from '../components/EditCardPage';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RevisePage from '../components/RevisePage';

import { create } from 'domain';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage}  exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddCardPage} />
                <PrivateRoute path="/edit/:id" component={EditCardPage} />
                <PrivateRoute path="/revise/" component={RevisePage} />
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;