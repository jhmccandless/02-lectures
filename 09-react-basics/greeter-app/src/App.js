import logo from "./logo.svg";
import "./App.css";
import Greeter from "./components/Greeter.jsx";

const nameArray = ["Melanie", "Emma", "Mel B", "Geri", "Vicotoria"];

function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello, React!</h1>

      {nameArray.map((e) => (
        <Greeter key={e} name={e} />
      ))}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, React!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
