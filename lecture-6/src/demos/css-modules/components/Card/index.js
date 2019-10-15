import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Card = ({ title, description, children }) => (
  <div className={styles.card}>
    {title && <h3 className={styles.cardTitle}>{title}</h3>}

    {description && (
      <h6 className={styles.cardDescription}>
        {description}
      </h6>
    )}

    <div>{children}</div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  description: '',
};

export default Card;
