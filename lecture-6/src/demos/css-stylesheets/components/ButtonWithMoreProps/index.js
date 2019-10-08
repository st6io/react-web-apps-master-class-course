import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ButtonWithMoreProps = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={`buttonWithMoreProps
      ${variant} ${size} ${disabled && 'disabled'}`
    }
  >
    {children}
  </button>
);

ButtonWithMoreProps.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'success',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

ButtonWithMoreProps.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithMoreProps;
