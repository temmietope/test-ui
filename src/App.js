import React, { Component } from "react";
import { Route } from "react-router-dom"
import Home from "./Component/Home";
import "./App.css"


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
export default App;