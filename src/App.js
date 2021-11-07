import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/lch0711/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>{" "}
          by Lai Shuan Chung
        </footer>
      </div>
    </div>
  );
}

export default App;
