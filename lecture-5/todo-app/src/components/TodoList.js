import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import { toggleTodo, VisibilityFilters } from "../actions";

const TodoList = ({ todos, onToggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onToggleTodo(todo.id)} />
    ))}
  </ul>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("Invalid filter type provided: ", filter);
  }
};

const mapStateToProps = ({ todos, filter }) => ({
  todos: getVisibleTodos(todos, filter)
});

// const mapDispatchToPropsAsFunction = dispatch => ({
//   onToggleTodo: id => dispatch(toggleTodo(id))
// });

const mapDispatchToPropsAsObject = {
  onToggleTodo: toggleTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToPropsAsObject
)(TodoList);
