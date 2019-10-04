import React from 'react';
import { fetchHumidity, fetchTempertature } from '../utils';

class DataProvider extends React.Component {
  state = { data: {} };

  async componentDidMount() {
    const result = await this.props.fetchSource();
    this.setState({ data: { [this.props.name]: result } });
  }

  render() {
    const { data } = this.state;

    return this.props.children({ data });
  }
}

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

export class DemoRenderProps extends React.PureComponent {
  state = { clicks: 0 };
  showDataRef = React.createRef();

  handleClick = e => {
    e.preventDefault();
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  };

  paintBlue = e => {
    e.preventDefault();
    this.showDataRef.current.paintBlue();
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <DataProvider fetchSource={fetchHumidity} name="humidity">
          {({ data: humidityData }) => (
            <DataProvider fetchSource={fetchTempertature} name="temperature">
              {({ data: tempData }) => (
                <ShowData
                  ref={this.showDataRef}
                  data={{ city: 'Sofia', ...humidityData, ...tempData }}
                />
              )}
            </DataProvider>
          )}
        </DataProvider>

        <button onClick={this.handleClick}>Clicks: {this.state.clicks}</button>
        <button onClick={this.paintBlue}>Paint Blue</button>
      </div>
    );
  }
}
