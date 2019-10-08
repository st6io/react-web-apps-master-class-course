import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.css';

const ButtonWithMorePropsSpec = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={cx('buttonWithMorePropsSpec', {
      [variant]: variant,
      [size]: size,
      disabled,
    })}
  >
    {children}
  </button>
);

ButtonWithMorePropsSpec.propTypes = {
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

ButtonWithMorePropsSpec.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithMorePropsSpec;
