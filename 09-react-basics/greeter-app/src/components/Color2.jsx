import React from "react";

class Color2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.color.map((e) => (
      <div
        key={e.id}
        style={{ width: "100px", height: "100px", backgroundColor: e.color }}
      >
        Component with color: {e.color}
      </div>
    ));
    //   <div style={{ backgroundColor: `${this.props.color[0]}` }}>
    //     This is how we did it in class
    //   </div>
  }
}

export default Color2;
