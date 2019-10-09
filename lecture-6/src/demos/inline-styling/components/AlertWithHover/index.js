import React from 'react';
import PropTypes from 'prop-types';

import { useHover } from './hooks';

const baseStyle = {
  border: '1px solid silver',
  backgroundColor: 'white',
  color: '#000',
  padding: '1rem 2rem',
  margin: '1rem',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: 'all .3s ease-out',
};

const hoverStyle = {
  ...baseStyle,
  backgroundColor: 'silver',
  boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
};

const AlertWithHover = ({ children }) => {
  const [hoverRef, isHovered] = useHover();

  const style = isHovered
    ? hoverStyle
    : baseStyle;

  return (
    <div ref={hoverRef} style={style}>
      {children}
    </div>
  );
};

AlertWithHover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlertWithHover;
