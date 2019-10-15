import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ButtonWithVariant = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={`buttonWithVariant
      ${variant} ${size} ${disabled && 'disabled'}`
    }
  >
    {children}
  </button>
);

ButtonWithVariant.propTypes = {
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

ButtonWithVariant.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithVariant;
