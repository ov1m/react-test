import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./app";

class MainApp extends Component {
  render() {
    return (
      <App />
    )
  }
}


ReactDOM.render(<MainApp />, document.getElementById("app"));

