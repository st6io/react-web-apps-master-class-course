import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Meme from '../components/Meme';
import styles from './Meme.module.scss';

export default {
  title: 'Meme',
};

export const RawMeme = () => {
  const props = {
    topText: 'Your excuses',
    bottomText: 'are lies!',
    image:
      'https://www.maxim.com/.image/t_share/MTYwNjI1MDQ4NTM1NzA0NzQ3/jocko-willink-attack-mondays.png',
  };
  return <Meme {...props} />;
};

export const PrettyMeme = () => {
  withKnobs();
  const props = {
    topText: text('Top Text', 'Your excuses'),
    bottomText: text('Bottom Text', 'are lies!'),
    image: text(
      'Image',
      'https://www.maxim.com/.image/t_share/MTYwNjI1MDQ4NTM1NzA0NzQ3/jocko-willink-attack-mondays.png',
    ),
  };

  return (
    <div className={styles.memeContainer}>
      <Meme {...props} />
    </div>
  );
};
