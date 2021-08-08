// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from "redux";

console.log("starting bank app");

const defaultState = {
  balance: 0,
};

const actionIncrement = {
  type: "increment",
};

const actionDecrement = {
  type: "decrement",
};

function account(state = defaultState, action) {
  switch (action.type) {
    case "increment":
      return {
        balance: state.balance + 1,
      };
    case "decrement":
      return {
        balance: state.balance - 1,
      };
  }

  return state;
}

const store = createStore(account);
store.subscribe(() => {
  console.log("--state has updated--");
  const state = store.getState();
  console.log(state);
});

window.store = store;
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;
