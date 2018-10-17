import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
