import React from 'react';

import styles from './common.module.scss';

const Card = ({ children, className }) => (
  <div className={`${styles.card} ${className || ''}`}>{children}</div>
);

export default Card;
