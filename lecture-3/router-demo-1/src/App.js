import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const About = props => <div className="page">About</div>;
const User = props => <div className="page">User</div>;
const NoMatch = props => <div className="page">NoMatch</div>;

export const RouteMatcher = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:user">
          <User />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
