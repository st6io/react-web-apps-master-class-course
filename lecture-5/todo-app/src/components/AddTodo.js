import React from "react";
import { connect } from "react-redux";
import { addTodo as addTodoAction } from "../actions";

class AddTodo extends React.Component {
  state = {
    text: null
  };

  onChange = ({ target: { value } }) =>
    this.setState({
      text: value
    });

  render() {
    const { addTodo } = this.props;
    const { text } = this.state;

    return (
      <div>
        <input onChange={this.onChange} />
        <button type="submit" onClick={() => addTodo(text)}>
          Add Todo
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodo: addTodoAction
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
