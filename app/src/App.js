import React from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import Weather from "./Components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather/>
    </div>
  );
}

export default App;
