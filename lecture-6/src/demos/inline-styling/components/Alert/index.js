import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ children }) => (
  <div
    style={{
      border: '1px solid silver',
      backgroundColor: 'white',
      color: '#000',
      padding: '1rem 2rem',
      margin: '1rem',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    }}
  >
    {children}
  </div>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Alert;
