import React, { Components } from "react";
import rot13 from "rot-thirteen";

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.initialText || "",
      translated: rot13(props.initialText) || "",
    };
  }

  render() {
    return (
      <div>
        <h1>Translator</h1>
        <input
          type="text"
          onChange={(e) => {
            console.log(this.state.text);
            this._updateText(this.state.text);
          }}
        />
        <p>{this.state.text}</p>
        <p>{this.state.translated}</p>
      </div>
    );
  }

  _updateText = (newText) => {
    this.setState(
      {
        text: newText,
        translated: rot13(newText),
      },
      () => {
        console.log(`new text is ${newText}`);
      }
    );
  };
}
export default Translator;
