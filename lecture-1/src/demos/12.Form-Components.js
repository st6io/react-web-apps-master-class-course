import React from 'react';

class LoginForm extends React.Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  checkedRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const payload = {
      username: this.usernameRef.current.value,
      email: this.passwordRef.current.value,
      checked: this.checkedRef.current.checked,
    };

    console.log(payload);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="type" placeholder="Username" ref={this.usernameRef} />
        <input type="password" placeholder="Password" ref={this.passwordRef} />
        <div>
          <input type="checkbox" defaultChecked ref={this.checkedRef} />
          <label>Rembember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export { LoginForm };
