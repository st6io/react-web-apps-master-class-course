import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import { rootReducer } from "./reducers";
import { VisibilityFilters } from "./actions";

const initialState = {
  todos: [
    { id: 1, text: "First todo!", completed: false },
    { id: 2, text: "Second todo!", completed: true }
  ],
  filter: VisibilityFilters.SHOW_ALL
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
