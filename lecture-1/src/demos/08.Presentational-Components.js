import React from 'react';

import { starWarsCharacters } from './data';

export class ListView extends React.Component {
  render() {
    const { className, nodes, title } = this.props;

    return (
      <div className={className || ''}>
        <h1>{title}</h1>
        {nodes.map(({ id, name }) => (
          <div key={id} className="row">
            <div>{id}</div>
            <div>{name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export const PresentListView = () => (
  <ListView
    className="alternating-list-view"
    title="Star Wars Characters"
    nodes={starWarsCharacters}
  />
);
