import React from "react";
import "./CryptoListItem.css";

const CryptoListItem = ({ name, value }) => {
  return (
    <div className="list-item">
      <h3>{name}</h3>
      <h3>{value}</h3>
      <button>X</button>
    </div>
  );
};

export default CryptoListItem;
