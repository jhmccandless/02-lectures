// import logo from "./logo.svg";
import "./App.css";
// import Greeter from "./components/Greeter.jsx";
// import Color from "./components/Color";
// import { extend } from "lodash";
import React from "react";
import Color2 from "./components/Color2";

// const nameArray = ["Melanie", "Emma", "Mel B", "Geri", "Vicotoria"];

// store for random color objects
const array1 = [];

// getting a random color into array1
for (let i = 0; i < 6; i++) {
  array1.push({
    id: i,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      randomColArr: [],
    };
  }

  // using this function for color2
  randomColFunc(num) {
    let colorArr = [];
    for (let i = 0; i < num; i++) {
      colorArr.push({
        id: i,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }
    return colorArr;
  }

  render() {
    return (
      <div className="App">
        <h1 className="greeting">Hello, React!</h1>

        {/* this is the color generator from class */}
        <Color2 color={this.randomColFunc(6)} />

        {/* mapping to dispaly color array1, how i did it myself */}

        {/* {array1.map((e) => (
          <Color key={e.id} name={e.color} />
        ))} */}

        {/* {nameArray.map((e) => (
          <Greeter key={e} name={e} />
        ))} */}

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, React!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
