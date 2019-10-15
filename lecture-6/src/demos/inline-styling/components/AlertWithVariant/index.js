import React from 'react';
import PropTypes from 'prop-types';
import { tint, shade } from 'polished';

const colors = {
  white: '#fff',
  black: '#000',
  primary: 'skyblue',
  secondary: 'silver',
  error: 'coral',
  success: 'lime',
};

const baseStyles = {
  padding: '1rem',
  margin: '1rem',
  fontWeight: 600,
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};

const AlertWithVariant = ({ variant, children }) => {
  const style = {
    ...baseStyles,
    border: `1px solid ${colors[variant]}`,
    backgroundColor: tint(0.75, colors[variant]),
    color: shade(0.25, colors[variant]),
  };

  return <div style={style}>{children}</div>;
};

AlertWithVariant.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'success',
  ]),
};

AlertWithVariant.defaultProps = {
  variant: 'secondary',
};

export default AlertWithVariant;
