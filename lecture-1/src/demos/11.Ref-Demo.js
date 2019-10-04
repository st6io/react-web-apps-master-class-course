import React from 'react';

class LoginForm extends React.Component {
  passwordRef = React.createRef();
  emailRef = React.createRef();

  componentDidMount() {
    this.emailRef.current.focus();
  }

  focusPasswordInput = () => {
    this.passwordRef.current.focus();
  };

  render() {
    return (
      <form className="forms d-flex flex-column">
        <input type="email" placeholder="Email" ref={this.emailRef} />
        <input type="password" placeholder="Password" ref={this.passwordRef} />
      </form>
    );
  }
}

class AutoFocusPasswordInput extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focusPasswordInput();
  }

  render() {
    return <LoginForm ref={this.inputRef} />;
  }
}

export { AutoFocusPasswordInput };
