import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import React, { useState } from "react";
import Protected from "./Protected";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const _toggleIsLoggedIn = () => setIsLoggedIn(!isLoggedIn);
  return (
    <Router>
      <div>
        <button onClick={_toggleIsLoggedIn}>
          {isLoggedIn ? "logout" : "login"}
        </button>
        <br />
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>{isLoggedIn && <Link to="/blog">Blog</Link>}</nav>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Protected isLoggedIn={isLoggedIn}>
            <Blog />
          </Protected>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
