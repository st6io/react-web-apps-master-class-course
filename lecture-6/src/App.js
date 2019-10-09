import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Nav from './components/Nav';
import Routes from './components/Routes';
import demos from './demos';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-content">
        <Switch>
          <Routes pages={demos} />
        </Switch>
      </div>

      <div className="App-nav">
        <Nav pages={demos} />
      </div>
    </div>
  </Router>
);

export default App;
