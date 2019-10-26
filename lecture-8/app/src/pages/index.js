import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Car from './car';
import Cars from './cars';

const Pages = () => {
  return (
    <Switch>
      <Route path="/cars/:carId" component={Car} />
      <Route path="/cars" component={Cars} exact />
      <Route path="/" exact component={() => <Redirect to="/cars" />} />
    </Switch>
  );
};

export default Pages;
