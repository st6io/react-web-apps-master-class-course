import React from 'react';

import Container from './Container';
import Card from './Card';
import styles from './MemeGenerator.module.scss';
import MemeInput from './MemeInput';
import Meme from './Meme';

const defaultImage =
  'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png';

export default class MemeGenerator extends React.Component {
  state = {
    topText: 'React',
    bottomText: 'is awesome!',
    url: '',
    image: defaultImage,
  };

  handleInputChange = input => {
    this.setState(input);
  };

  handleImageChange = image => {
    this.setState({ image });
  };

  render() {
    const { topText, bottomText, url, image } = this.state;

    return (
      <Container className={styles.container}>
        <Card className={styles.card}>
          <MemeInput
            {...{ topText, bottomText, url }}
            onInputChange={this.handleInputChange}
            onImageChange={this.handleImageChange}
          />
          <Meme {...{ topText, bottomText, image }} />
        </Card>
      </Container>
    );
  }
}
