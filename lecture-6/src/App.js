import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import Nav from './components/Nav';
import Routes from './components/Routes';
import demos from './demos';
import cx from 'classnames';

import './App.css';

const App = () => {
  const [menuOpened, setMenuOpened] = useState(true);

  const handleToggle = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <Switch>
            <Routes pages={demos} />
          </Switch>
        </div>

        <div
          className={cx('App-nav', {
            collapsed: !menuOpened,
          })}
        >
          <Nav pages={demos} />
        </div>

        <button
          className="App-toggle"
          onClick={handleToggle}
        >
          {menuOpened ? <FaBars /> : <FaTimes />}
        </button>
      </div>
    </Router>
  );
};

export default App;
