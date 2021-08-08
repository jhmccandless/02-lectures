import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import CounterApp from "./CounterApp";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
