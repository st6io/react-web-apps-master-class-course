import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import MemeInput from '../components/MemeInput';
import Card from '../components/Card';
import Container from '../components/Container';
import styles from './MemeInput.module.scss';

export default {
  title: 'MemeInput',
};

export const Raw = () => {
  return <MemeInput />;
};

export const Pretty = () => {
  return (
    <Card className={styles.card}>
      <MemeInput
        topText="This is the top text input"
        bottomText="Enter Bottom Text Here..."
        url="https://good.com/image.png"
      />
    </Card>
  );
};

export const Themed = () => {
  withKnobs();
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark');
  return (
    <Container className={styles[theme]}>
      <Card className={styles.card}>
        <MemeInput />
      </Card>
    </Container>
  );
};

export const Behavior = () => {
  withKnobs();
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark');
  const [state, setState] = useState({
    topText: '',
    bottomText: '',
    url: '',
  });
  const onInputChange = input => {
    setState({ ...state, ...input });
    action('input-changed')(input);
  };

  return (
    <Container className={styles[theme]}>
      <Card className={styles.card}>
        <MemeInput
          onInputChange={onInputChange}
          onImageChange={action('shuffled-image')}
        />
      </Card>
    </Container>
  );
};
