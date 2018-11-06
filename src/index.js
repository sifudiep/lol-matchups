import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
