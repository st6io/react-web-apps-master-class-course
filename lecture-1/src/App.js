import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Appbar from './components/Appbar';
import demos from './demos';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar navs={demos} />
        <div className="container">
          <Switch>
            {demos.map(({ path, component }) => (
              <Route path={path} key={path} component={component} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
