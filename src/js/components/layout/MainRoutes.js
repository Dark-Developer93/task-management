import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import TaskPage from '../pages/TaskPage';
import ReportPage from '../pages/ReportPage';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/task" component={TaskPage} />
    <Route path="/report" component={ReportPage} />
    <Redirect to="/" />
  </Switch>
);

export default MainRoutes;
