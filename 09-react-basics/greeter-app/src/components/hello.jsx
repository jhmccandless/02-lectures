import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }

  changeName = (event) => {
    console.log("Hello World");
    console.log(event);
    this.setState({ name: event.target.value });
  };

  render() {
    console.log("component re-rendered", this.state);
    return (
      <div>
        <h1>
          Hello World {this.props.name} Count: {this.props.counter}
        </h1>
        {/** input with text. that when I type it changes the state.name */}
        <input type="text" onChange={this.changeName} />
      </div>
    );
  }
}

export default HelloWorld;
