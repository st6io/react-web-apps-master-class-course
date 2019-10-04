import React from 'react';

class LoginForm extends React.Component {
  state = { username: '', password: '', remember: true };

  handleInputChange = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  handleToggle = ({ currentTarget }) => {
    this.setState({ remember: currentTarget.checked });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { username, password, remember } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="type"
          placeholder="Username"
          name="username"
          value={username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        />
        <div>
          <input
            type="checkbox"
            checked={remember}
            onChange={this.handleToggle}
          />
          <label>Rembember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export { LoginForm };
