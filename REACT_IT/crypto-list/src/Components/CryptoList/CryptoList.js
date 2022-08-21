import React from "react";
import CryptoForm from "../CryptoForm/CryptoForm";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import "./CryptoList.css";

const CryptoList = () => {
  return (
    <div className="crypto-list">
      <CryptoForm />
    </div>
  );
};

export default CryptoList;
