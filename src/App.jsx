import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.css";

const App = () => (
  <div>
    <Header />
    <div>Hi there, I'm React from Webpack 5.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
