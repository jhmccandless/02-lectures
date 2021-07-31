// import "./App.css";
import React from "react";
import Color2 from "../components/Color2";

// store for random color objects
const array1 = [];

// getting a random color into array1
for (let i = 0; i < 6; i++) {
  array1.push({
    id: i,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  });
}

class Colors3 extends React.Component {
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
        <div className="main">
          <Color2 color={this.randomColFunc(6)} />
        </div>

        {/* mapping to dispaly color array1, how i did it myself */}

        {/* {array1.map((e) => (
          <Color key={e.id} name={e.color} />
        ))} */}
      </div>
    );
  }
}

export default Colors3;
