// import logo from "./logo.svg";
// import "./App.css";
import HelloWorld from "../components/hello";
import React, { useState } from "react";

class CountApp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count0: 0,
      count1: 20,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
          {/** every time I click +1. the counter should go up. and pass it down to hello world*/}
          <button onClick={() => (count0 = count0 + 1)}>+1</button>
          <button onClick={() => (count1 = count1 + 1)}>+1</button>
          <HelloWorld name="hi1" counter={count} />
          <HelloWorld name="hi2" counter={count2} />
        </header>
      </div>
    );
  }
}

function CountApp() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(20);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/** every time I click +1. the counter should go up. and pass it down to hello world*/}
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount2(count2 + 1)}>+1</button>
        <HelloWorld name="hi1" counter={count} />
        <HelloWorld name="hi2" counter={count2} />
      </header>
    </div>
  );
}

export default CountApp;
