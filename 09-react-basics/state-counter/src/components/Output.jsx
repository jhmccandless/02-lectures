import React, { Component } from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <span>{this.props.count}</span>;
  }
}

export default Output;
