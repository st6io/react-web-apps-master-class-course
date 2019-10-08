import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import demos from './demos';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-nav">
        <Nav pages={demos} />
      </div>

      <div className="App-content">
        <Switch>
          {demos.map(({ path, component, exact }) => (
            <Route
              path={path}
              key={path}
              component={component}
              exact={exact}
            />
          ))}
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
