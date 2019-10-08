import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Nav = ({ pages }) => (
  <>
    <h3>Styling with React</h3>
    <ul className="Nav">
      {pages.map(({ path, name }) => (
        <li key={path} className="Nav-link">
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Nav;
