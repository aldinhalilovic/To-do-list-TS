import React from "react";
import "./App.css";
import CryptoForm from "./Components/CryptoForm/CryptoForm";
import CryptoList from "./Components/CryptoList/CryptoList";
import CryptoTitle from "./Components/CryptoTitle/CryptoTitle";

function App() {
  return (
    <div className="App">
      <CryptoTitle />
      {/* <CryptoList /> */}
      <CryptoForm />
    </div>
  );
}

export default App;
