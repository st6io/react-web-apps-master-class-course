import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const ButtonWithVariantScss = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={cx('buttonWithVariantScss', {
      [variant]: variant,
      [size]: size,
      disabled,
    })}
  >
    {children}
  </button>
);

ButtonWithVariantScss.propTypes = {
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

ButtonWithVariantScss.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithVariantScss;
