// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Color2 from "./components/Color2";
import Colors3 from "./pages/colors3";
import { Switch, Route, Link } from "react-router-dom";
import CountApp from "./pages/helloCount";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/colorz">Colors3</Link>
          </li>
          <li>
            <Link to="/helloz">CountApp</Link>
          </li>
          <li>
            <Link to="/">App</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/colorz">
            <Colors3 />
          </Route>
          <Route path="/helloz">
            <CountApp />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
