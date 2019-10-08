import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { flatMap } from 'lodash';

import Nav from './components/Nav';
import demos from './demos';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-nav">
        <Nav demos={demos} />
      </div>

      <div className="App-content">
        <Switch>
          {flatMap(demos, ({ items }) =>
            items.map(({ path, component }) => (
              <Route
                path={path}
                key={path}
                component={component}
              />
            )),
          )}
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
