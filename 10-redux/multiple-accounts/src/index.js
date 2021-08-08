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

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from "redux";

console.log("staring banking for multiple accts");

const defaultState = {
  checking: 100,
  savings: 100,
};

const ACTION_DEPSOSIT = "desposit";
const ACTION_WITHDRAWL = "withdrawl";

const actionDepositChecking = {
  type: "deposit_checking",
  payload: "checking",
};

const actionDepositSavings = {
  type: "deposit_Savings",
  payload: "Savings",
};

function createDeposit(acc, amt) {
  return {
    type: "deposit",
    payload: {
      acc,
      amt,
    },
  };
}

function createWithdrawl(acc, amt) {
  return {
    type: "withdrawl",
    payload: {
      acc,
      amt,
    },
  };
}

function accouts(state = defaultState, action) {
  switch (action.type) {
    case ACTION_DEPSOSIT:
      return {
        ...state,
        [action.payload.acc]: state[action.payload.acc] + action.payload.amt,
      };
    case ACTION_WITHDRAWL:
      return {
        ...state,
        [action.payload.acc]: state[action.payload.acc] - action.payload.amt,
      };
  }

  return state;
}

const store = createStore(accouts);
store.subscribe(() => {
  console.log("==state updated==");
  const state = store.getState();
  console.log(state);
});

createDeposit("checking");
createDeposit("savings");
createDeposit("retirement");

window.store = store;
window.createDeposit = createDeposit;
window.createWithdrawl = createWithdrawl;
