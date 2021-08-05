import React, { Components } from "react";
import Output from "./Output";
import Increment from "./Increment";
import Decrement from "./Decrement";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount || 0,
    };
  }

  render() {
    return (
      <div>
        <Decrement handleClick={this._decrementCounter} />
        <Output count={this.state.count} />
        <Increment handleClick={this._incrementCounter} />
      </div>
    );
  }

  _incrementCounter = () => {
    //   call set state here
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("finished count!");
    });
  };
  _decrementCounter = () => {
    //   call set state here
    this.setState({ count: this.state.count - 1 }, () => {
      console.log("finished count!");
    });
  };
}

export default Counter;
