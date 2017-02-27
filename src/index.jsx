import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import App from "./app";

class MainApp extends Component {
  render() {

    axios.get('http://localhost:3000/posts')
      .then((response) => {
        console.log('adsaaaaaa', response.request.response);
      })
      .catch(function (error) {
        console.log('bbbbbb', error);
      });



    return (
      <App />
    )
  }
}


ReactDOM.render(<MainApp />, document.getElementById("app"));

