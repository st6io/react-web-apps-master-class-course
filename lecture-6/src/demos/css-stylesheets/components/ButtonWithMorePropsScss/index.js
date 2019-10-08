import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const ButtonWithMorePropsScss = ({
  variant,
  size,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={cx('buttonWithMorePropsScss', {
      [variant]: variant,
      [size]: size,
      disabled,
    })}
  >
    {children}
  </button>
);

ButtonWithMorePropsScss.propTypes = {
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

ButtonWithMorePropsScss.defaultProps = {
  variant: 'secondary',
  size: 'small',
  disabled: false,
};

export default ButtonWithMorePropsScss;
