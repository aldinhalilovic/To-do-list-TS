import React from "react";
import "./App.css";
import CryptoForm from "./Components/CryptoForm/CryptoForm";
import CryptoList from "./Components/CryptoList/CryptoList";
import CryptoListItem from "./Components/CryptoListItem/CryptoListItem";
import CryptoTitle from "./Components/CryptoTitle/CryptoTitle";

function App() {
  return (
    <div className="App">
      <CryptoTitle />
      <CryptoForm />
      <CryptoList />
      {/* <CryptoListItem /> */}
    </div>
  );
}

export default App;
