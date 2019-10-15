import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.css';

const ButtonWithVariantSpec = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={cx('buttonWithVariantSpec', {
      [variant]: variant,
      [size]: size,
      disabled,
    })}
  >
    {children}
  </button>
);

ButtonWithVariantSpec.propTypes = {
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

ButtonWithVariantSpec.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithVariantSpec;
