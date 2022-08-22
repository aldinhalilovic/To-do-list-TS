import React from "react";
import "./App.css";
import CryptoList from "./Components/CryptoList/CryptoList";
import CryptoTitle from "./Components/CryptoTitle/CryptoTitle";

function App() {
  return (
    <div className="App">
      <CryptoTitle />

      <CryptoList />
    </div>
  );
}

export default App;
