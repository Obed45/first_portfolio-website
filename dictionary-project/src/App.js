import React, { Component } from "react";
import ReactDOM from "react-dom";
import Entry from "../componets/Entry";
import "./style.css";

class App extends Component {
  render() {
    return <Entry />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));