import React from 'react';
import { setDisplayName, compose } from 'recompose';
import { fetchHumidity, fetchTempertature } from '../utils';

const withDataProvider = (fetchSource, name) => WrappedComponent => {
  class DataProvider extends React.Component {
    state = { data: {} };

    async componentDidMount() {
      const result = await fetchSource();
      this.setState({ data: { [name]: result } });
    }

    render() {
      const { data } = this.state;

      return <WrappedComponent {...this.props} data={data} />;
    }
  }
  return DataProvider;
};

const enhance = compose(
  setDisplayName('WithWeatherData'),
  withDataProvider(fetchHumidity, 'humidity'),
  withDataProvider(fetchTempertature, 'temperature'),
);

class ShowData extends React.Component {
  divRef = React.createRef();

  paintBlue = () => {
    this.divRef.current.style.background = 'blue';
  };

  render() {
    const { data } = this.props;
    return (
      <div ref={this.divRef}>
        <div>City: {data.city} </div>
        <div>Humidity: {data.humidity}</div>
        <div>Temperature: {data.temperature}</div>
      </div>
    );
  }
}

const EnhancedShowData = enhance(ShowData);
export class DemoHOCsCaveats extends React.PureComponent {
  state = { clicks: 0 };
  showDataRef = React.createRef();

  paintBlue = e => {
    e.preventDefault();
    this.showDataRef.current.paintBlue();
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <EnhancedShowData ref={this.showDataRef} data={{ city: 'Sofia' }} />
        <button onClick={this.handleClick}>Clicks: {this.state.clicks}</button>
        <button onClick={this.paintBlue}>Paint Blue</button>
      </div>
    );
  }
}
