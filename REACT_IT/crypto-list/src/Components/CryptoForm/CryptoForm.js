import React, { useState } from "react";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import "./CryptoForm.css";

const CryptoForm = () => {
  const [cryptoItem, setCryptoItem] = useState({
    name: "",
    value: "",
  });

  return (
    <div className="crypto-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(cryptoItem);
        }}
      >
        <div>
          {" "}
          <input
            type={"text"}
            placeholder="Add Crypto"
            className="namee"
            value={cryptoItem.name}
            onChange={(e) =>
              setCryptoItem((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          ></input>
          <input
            type={"text"}
            placeholder="Value"
            className="value"
            value={cryptoItem.value}
            onChange={(e) =>
              setCryptoItem((prev) => ({ ...prev, value: e.target.value }))
            }
          ></input>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <CryptoListItem name={cryptoItem.name} value={`${cryptoItem.value}$`} />
    </div>
  );
};

export default CryptoForm;
