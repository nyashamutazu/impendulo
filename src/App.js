import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
