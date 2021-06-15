import React from "react";
import "./App.css";
import { UAParser } from "ua-parser-js";
import { version } from "react-dom";

function App() {
  const uaParser = new UAParser();
  const { version, name: browserName } = uaParser.getBrowser();
  const {vendor, model} = uaParser.getDevice()
  return (
    <div className="App">
      <h1>User Agent / Device Details</h1>
      <h2>Browser Details</h2>
      <p>
        Name: <strong>{browserName}</strong>
      </p>
      <p>
        version: <strong>{version}</strong>
      </p>
      <h2>Device Details</h2>
      <p>
        vendor: <strong>{vendor}</strong>
      </p>
      <p>
        model: <strong>{model}</strong>
      </p>
    </div>
  );
}

export default App;
