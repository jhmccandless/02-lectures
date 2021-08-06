import React, { Component } from "react";

class LoginMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { message, isValid } = this.props;

    if (message) {
      return (
        //   differences
        <h1 className={isValid ? "success" : "error"}>{message}</h1>
      );
    } else {
      return null;
    }
  }
}

export default LoginMessage;
