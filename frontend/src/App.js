import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState(null);

  function getData() {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      // body: JSON.stringify({
      //   a: 10,
      //   b: 20,
      // }),
    };
    fetch("/api/day", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      });
  }
  //end of new line

  return (
    <div className="App">
      <header className="App-header">
        <h1>React / FastAPI</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={getData}>click me</button>
        {apiData && <div>The button was clicked at exactly: {apiData}</div>}
      </header>
    </div>
  );
}

export default App;
