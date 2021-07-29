import React, { Component } from "react";

class Greeter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  // make greeter erturn som jsx
  render() {
    return <h1>Hello, Again! {this.props.name}!</h1>;
  }
}

export default Greeter;
