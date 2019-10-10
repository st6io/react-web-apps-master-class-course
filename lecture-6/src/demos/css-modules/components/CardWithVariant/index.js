import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';

import styles from './styles.module.css';

const CardWithVariant = ({
  imageSrc,
  title,
  description,
  variant,
  children,
}) => (
  <div className={styles[`card${capitalize(variant)}`]}>
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

CardWithVariant.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'success',
  ]),
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

CardWithVariant.defaultProps = {
  variant: 'secondary',
  imageSrc: '',
  title: '',
  description: '',
};

export default CardWithVariant;
