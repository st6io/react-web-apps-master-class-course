import React from 'react';
import { NavLink } from 'react-router-dom';
import { flatMap } from 'lodash';

import './styles.css';

const Nav = ({ demos }) => (
  <div>
    <h1>Styling with React</h1>

    {flatMap(demos, ({ title, items }) => (
      <div key={title}>
        <h4 className="Nav-title">{title}</h4>

        <ul className="Nav-list">
          {items.map(({ path, name }) => (
            <li key={path} className="Nav-item">
              <NavLink className="Nav-link" to={path}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Nav;
