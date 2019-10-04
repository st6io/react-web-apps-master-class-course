import React from 'react';

import { fetchStarWarsCharacters } from './data';
import { ListView } from './08.Presentational-Components';

class DataLoader extends React.Component {
  state = { nodes: [] };

  async componentDidMount() {
    const starWarsCharacters = await this.props.fetchNodes();
    this.setState({ nodes: starWarsCharacters });
  }

  render() {
    const { component: Component, title, className } = this.props;

    return (
      <div className={className || ''}>
        <h1>{title}</h1>
        <Component nodes={this.state.nodes} />
      </div>
    );
  }
}

const StarWarsListView = () => (
  <DataLoader
    fetchNodes={fetchStarWarsCharacters}
    component={ListView}
    title="StarWars Characters"
    className="alternating-list-view"
  />
);

export { StarWarsListView };
