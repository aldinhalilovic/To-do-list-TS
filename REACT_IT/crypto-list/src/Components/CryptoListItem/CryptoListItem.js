import React from "react";
import "./CryptoListItem.css";

const CryptoListItem = ({ name, value, deleteBtn }) => {
  return (
    <div className="list-item">
      <h1 className="name">{name}</h1>
      <h1 className="value">{value}</h1>
      <button onClick={deleteBtn} className="delete">
        X
      </button>
    </div>
  );
};

export default CryptoListItem;
