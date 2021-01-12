import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { messaging } from "./firebase";

function App() {
  messaging
    .requestPermission()
    .then(() => {
      messaging
        .getToken()
        .then((token) => {
          console.log("token: ", token);
        })
        .catch((err) => {
          console.log("get token failed: ", err);
        });
    })
    .catch((err) => {
      console.log("request permission failed: ", err);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
