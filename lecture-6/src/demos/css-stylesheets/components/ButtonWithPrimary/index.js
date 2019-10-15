import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ButtonWithPrimary = ({ primary, children }) => (
  <button
    className={`buttonWithPrimary ${primary && 'primary'}`}
  >
    {children}
  </button>
);

ButtonWithPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
};

ButtonWithPrimary.defaultProps = {
  primary: false,
};

export default ButtonWithPrimary;
