import React from "react";
import ReactDOM from "react-dom";
import TweetContainer from "./components/TweetContainer";
import { Provider } from "react-redux"
import configureStore from "./store"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Twitter App</h1>
      <TweetContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootElement
);
