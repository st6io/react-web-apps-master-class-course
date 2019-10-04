import React from 'react';

class FocusExample extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} type="text" placeholder="Focus Here" />;
  }
}

export { FocusExample };
