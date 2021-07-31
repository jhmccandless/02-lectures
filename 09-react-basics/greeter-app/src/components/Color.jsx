import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: "green",
    };
  }

  render() {
    return (
      // returns Color div with the props from super(props)
      <div style={{ backgroundColor: `${this.props.name}` }}>
        This is a div || Color: {this.props.name}
      </div>
    );
  }
}

export default Color;
