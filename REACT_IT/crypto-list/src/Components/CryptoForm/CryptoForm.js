import React, { useState } from "react";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import "./CryptoForm.css";

const CryptoForm = () => {
  const [cryptoItem, setCryptoItem] = useState({
    name: "",
    value: "",
  });

  const [nameValue, setNameValue] = useState({
    name: "",
    value: "",
  });

  const reset = (event) => {
    event.target.value = " ";
  };

  return (
    <div className="crypto-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(cryptoItem);
          setNameValue((prev) => ({
            ...prev,
            name: cryptoItem.name,
            value: cryptoItem.value,
          }));
          reset();
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
      <CryptoListItem name={nameValue.name} value={`${nameValue.value}$`} />
    </div>
  );
};

export default CryptoForm;
