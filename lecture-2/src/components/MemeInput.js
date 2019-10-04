import React from 'react';
import Row from './Row';

import styles from './MemeInput.module.scss';
import { getRandomImage } from '../utils';

export default class MemeInput extends React.Component {
  state = {
    showUrl: false,
  };

  toggleUrlInput = () => {
    this.setState(({ showUrl }) => ({ showUrl: !showUrl }));
  };

  onTextChange = ({ target: { name, value } }) => {
    this.props.onInputChange({ [name]: value });
  };

  shuffleImage = async () => {
    const image = await getRandomImage();

    this.props.onImageChange(image);
  };

  render() {
    const { topText, bottomText, url, className } = this.props;

    return (
      <div className={className}>
        <Row>
          <input
            type="text"
            value={topText}
            onChange={this.onTextChange}
            name="topText"
          />
        </Row>
        <Row>
          <input
            type="text"
            value={bottomText}
            onChange={this.onTextChange}
            name="bottomText"
          />
        </Row>

        <Row>
          <div className={styles.leftColumn}>
            <button onClick={this.toggleUrlInput}>Via Url</button>
            <button id="shuffle" onClick={this.shuffleImage}>
              Shuffle
            </button>
          </div>
        </Row>

        {this.state.showUrl && (
          <Row>
            <input
              type="text"
              value={url}
              onChange={this.onTextChange}
              name="url"
            />
          </Row>
        )}
      </div>
    );
  }
}
