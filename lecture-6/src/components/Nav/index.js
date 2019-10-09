import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { flatMap } from 'lodash';

import { groupPropType } from '../propTypes';

import './styles.css';

const Nav = ({ pages }) => (
  <div>
    <h1>Styling with React</h1>

    {flatMap(pages, ({ title, items }) => (
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

Nav.propTypes = {
  pages: PropTypes.arrayOf(groupPropType).isRequired,
};

export default Nav;
