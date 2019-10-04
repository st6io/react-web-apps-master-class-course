import React from 'react';

class ClassComponent extends React.Component {
  state = { count: 0, prefix: 'Clicked' };
  onClick = () => this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    const { count, prefix } = this.state;
    return (
      <button onClick={this.onClick}>
        {prefix} {count} times
      </button>
    );
  }
}

export { ClassComponent };
