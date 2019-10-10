import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.css';

const ButtonWithVariantCx = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={cx('buttonWithVariantCx', {
      [variant]: variant,
      [size]: size,
      disabled,
      warning: size === 'large' && variant === 'error',
    })}
  >
    {children}
  </button>
);

ButtonWithVariantCx.propTypes = {
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

ButtonWithVariantCx.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithVariantCx;
