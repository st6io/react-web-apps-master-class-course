import React from 'react';

import styles from './thinking-in-react.module.scss';

const defaultImage =
  'https://st6.io/meme/static/media/Captain-Picard-Facepalm.71dabbd0.jpg';
const githubIcon = 'https://image.flaticon.com/icons/svg/25/25231.svg';
const githubRepo = 'https://github.com/st6io/meme';
const carreersUrl = 'https://st6.io/careers/';
const theme = {
  dark: styles.dark,
  light: styles.light,
};

const ThemeContext = React.createContext({ theme: theme.dark });

const Header = () => (
  <ThemeContext.Consumer>
    {({ changeTheme }) => (
      <div className={styles.header}>
        <div className={styles.brand}>
          <button className={styles.st6} onClick={changeTheme}>
            ST6
          </button>
          <h1>Meme Generator</h1>
          <a href={githubRepo}>
            <img src={githubIcon} className={styles.githubImg} alt="source" />
          </a>
        </div>
        <a href={carreersUrl}>We're hiring</a>
      </div>
    )}
  </ThemeContext.Consumer>
);

const Meme = ({ topText, bottomText, img }) => (
  <div className={styles.meme}>
    <div className={styles.topText}>{topText}</div>
    <div className={styles.bottomText}>{bottomText}</div>
    <img src={img} alt="meme" className={styles.memeImage} />
  </div>
);

class Content extends React.Component {
  state = {
    topText: 'Do the most meaningful meme...',
    bottomText: '...of your life',
    url: '',
    img: defaultImage,
    showUrl: false,
  };

  toggleUrlInput = () => {
    this.setState(({ showUrl }) => ({ showUrl: !showUrl }));
  };

  onTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { topText, bottomText, url } = this.state;

    return (
      <div className={styles.cardContent}>
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
            <button>Upload</button>
            <button onClick={this.toggleUrlInput}>Via Url</button>
            <button>Shuffle</button>
          </div>
          <div className={styles.rightColumn}>
            <button>Download</button>
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

        <Meme {...this.state} />
      </div>
    );
  }
}

const Row = ({ children }) => <div className={styles.row}>{children}</div>;

const Card = () => (
  <div className={styles.card}>
    <Header />
    <Content />
  </div>
);

const Container = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div className={`${styles.container} ${theme}`}>{children}</div>
    )}
  </ThemeContext.Consumer>
);

export class MemeGenerator extends React.PureComponent {
  state = { dark: true };

  handleChangeTheme = () => {
    this.setState(({ dark }) => ({ dark: !dark }));
  };

  get theme() {
    return this.state.dark ? theme.dark : theme.light;
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.theme, changeTheme: this.handleChangeTheme }}
      >
        <Container>
          <Card />
        </Container>
      </ThemeContext.Provider>
    );
  }
}
