import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.css';

const ButtonWithMorePropsClassnames = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={cx('buttonWithMorePropsClassnames', {
      [variant]: variant,
      [size]: size,
      disabled,
      warning: size === 'large' && variant === 'error',
    })}
  >
    {children}
  </button>
);

ButtonWithMorePropsClassnames.propTypes = {
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

ButtonWithMorePropsClassnames.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithMorePropsClassnames;
