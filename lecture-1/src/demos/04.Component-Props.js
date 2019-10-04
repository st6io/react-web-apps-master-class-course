import React from 'react';

class ClassComponent extends React.Component {
  render() {
    const { name } = this.props;
    return <div>I am {name}</div>;
  }
}

const FunctionComponent = ({ name }) => <div>I am {name}</div>;

export { ClassComponent, FunctionComponent };
