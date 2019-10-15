import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.css';

const ListWithSelection = ({ items, selectedIndex }) => {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(selectedIndex);

  return (
    <ul className="list">
      {items.map(({ name }, index) => (
        <li
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={cx('listItem', {
            'selected': index === currentIndex,
          })}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

ListWithSelection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  selectedIndex: PropTypes.number,
};

ListWithSelection.defaultProps = {
  items: [],
  selectedIndex: 0,
};

export default ListWithSelection;
