import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { range } from 'lodash';

const styles = {
  progress: {
    marginBottom: '2rem',
  },
  progressText: {
    textAlign: 'center',
    margin: '0.5rem',
  },
  progressBar: {
    display: 'flex',
    height: '1rem',
    overflow: 'hidden',
    fontSize: '0.75rem',
    backgroundColor: 'silver',
    borderRadius: '0.25rem',
    width: '20rem',
  },
  progressFiller: {
    display: 'flex',
    flexDirection: 'column',
    justifySontent: 'center',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transition: 'width 0.6s ease',
    opacity: '0.5',

    ':hover': {
      opacity: 1,
    }
  },
  primary: {
    backgroundColor: 'steelblue',
  },
  error: {
    backgroundColor: 'tomato',
  },
  success: {
    backgroundColor: 'springgreen',
  },
};

const ProgressWithVariantRadium = ({
  percentage,
  variant,
}) => (
  <div style={[styles.progress]}>
    <p style={styles.progressText}>{`${percentage ||
      0}%`}</p>

    <div style={styles.progressBar}>
      <div
        style={[
          styles.progressFiller,
          styles[variant],
          { width: `${percentage}%` },
        ]}
      ></div>
    </div>
  </div>
);

ProgressWithVariantRadium.propTypes = {
  percentage: PropTypes.oneOf(range(0, 101)),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'success',
  ]),
};

ProgressWithVariantRadium.defaultpercentage = {
  percentage: 0,
  variant: 'secondary',
};

export default Radium(ProgressWithVariantRadium);
