import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const List = ({ items, selectedIndex }) => (
  <ul className="list">
    {items.map(({ name }, index) => (
      <li
        key={index}
        className={`listItem ${selectedIndex === index &&
          'selected'}`}
      >
        {name}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  selectedIndex: PropTypes.number,
};

List.defaultProps = {
  items: [],
  selectedIndex: 0,
};

export default List;
