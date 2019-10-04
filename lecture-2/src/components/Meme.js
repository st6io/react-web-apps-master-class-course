import React from 'react';
import styles from './Meme.module.scss';

const Meme = ({ topText, bottomText, image }) => {
  return (
    <div className={styles.meme}>
      <div className={styles.topText}>{topText}</div>
      <div className={styles.bottomText}>{bottomText}</div>
      <img src={image} alt="meme" className={styles.memeImage} />
    </div>
  );
};

export default Meme;
