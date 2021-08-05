import React, { Component } from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button onClick={this.props.handleClick}>+</button>;
  }
}

export default Increment;
