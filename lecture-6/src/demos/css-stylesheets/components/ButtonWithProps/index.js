import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ButtonWithProps = ({ primary, children }) => (
  <button
    className={`buttonWithProps ${primary && 'primary'}`}
  >
    {children}
  </button>
);

// const ButtonWithProps = ({ primary, children }) => {
//   const className = `buttonWithProps ${primary &&
//     'primary'}`;

//   return <button className={className}>{children}</button>;
// };

// const ButtonWithProps = ({ primary, children }) => {
//   const className = `buttonWithProps ${primary ?
//     'primary' : 'secondary'}`;

//   return <button className={className}>{children}</button>;
// };

ButtonWithProps.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
};

ButtonWithProps.defaultProps = {
  primary: false,
};

export default ButtonWithProps;
