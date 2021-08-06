import logo from "./logo.svg";
import "./App.css";

import React from "react";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        rid: {
          password: "rid1",
        },
      },
    };
  }

  render() {
    return (
      <div className="App">
        <LoginForm handleSubmit={this._checkCredentials} />
      </div>
    );
  }

  _checkCredentials = (username, password) => {
    // Compare the arguments to the contents of this.state.credentials
    console.log("checking credentials");
    const userObj = this.state.credentials[username];
    if (userObj && userObj.password === password) {
      return { isValid: true, message: "login success, very nice!" };
    } else {
      return {
        isValid: false,
        message: "FAIL",
      };
    }
  };
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
