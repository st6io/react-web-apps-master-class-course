import React from 'react';
import styles from './common.module.scss';

const Container = ({ className, children }) => (
  <div className={`${styles.container} ${className || ''}`}>{children}</div>
);

export default Container;
