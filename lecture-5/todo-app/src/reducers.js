import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters
} from "./actions";
import { combineReducers } from "redux";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false }
      ];
    }
    case TOGGLE_TODO: {
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }

    default:
      return state;
  }
};

const visibilityFilterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: todosReducer,
  filter: visibilityFilterReducer
});
