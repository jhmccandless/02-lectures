import React, { Component } from "react";

class Decrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button onClick={this.props.handleClick}>-</button>;
  }
}

export default Decrement;
