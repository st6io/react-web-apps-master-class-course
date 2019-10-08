import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ButtonWithContent = ({ children }) => (
  <button className="buttonWithContent">{children}</button>
);

ButtonWithContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonWithContent;
