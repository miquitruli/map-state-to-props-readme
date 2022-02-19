import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; /* We imported Provider from React Redux / We used Provider to wrap our React application*/
import counterReducer from "./reducers/counterReducer.js";
import App from "./App";
import "./index.css";

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById("root")
);
