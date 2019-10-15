import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const CardWithImage = ({
  imageSrc,
  title,
  description,
  children,
}) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      {imageSrc && (
        <div>
          <img className={styles.cardImage} src={imageSrc} alt="img" />
        </div>
      )}

      <div>
        {title && (
          <h3 className={styles.cardTitle}>{title}</h3>
        )}

        {description && (
          <h6 className={styles.cardDescription}>
            {description}
          </h6>
        )}
      </div>
    </div>

    <div>{children}</div>
  </div>
);

CardWithImage.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

CardWithImage.defaultProps = {
  imageSrc: '',
  title: '',
  description: '',
};

export default CardWithImage;
