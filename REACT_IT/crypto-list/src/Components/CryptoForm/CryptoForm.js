import React, { useState } from "react";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import "./CryptoForm.css";

const CryptoForm = () => {
  const [cryptoItem, setCryptoItem] = useState({ name: "", value: "" });
  const [nameValue, setNameValue] = useState([]);
  const deleteItem = (id) => {
    const newNameValue = nameValue.filter((el) => el.id !== id);
    setNameValue(newNameValue);
  };
  let nextId = 0;

  return (
    <div className="crypto-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          {" "}
          <input
            type={"text"}
            placeholder="Add Crypto"
            className="namee"
            value={cryptoItem.name}
            min={"1"}
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
            className="valuee"
            value={cryptoItem.value}
            min={"1"}
            onChange={(e) =>
              setCryptoItem((prev) => ({ ...prev, value: e.target.value }))
            }
          ></input>
        </div>
        <button
          type="submit"
          className="btn"
          onClick={() => {
            if (!cryptoItem.name || !cryptoItem.value) {
              return;
            }
            setNameValue([
              ...nameValue,
              { id: nextId++, name: cryptoItem.name, value: cryptoItem.value },
            ]);
            setCryptoItem(() => ({
              name: "",
              value: "",
            }));
          }}
        >
          Submit
        </button>
      </form>
      <div>
        {nameValue.map((el) => (
          <span key={el.id++}>
            <CryptoListItem
              name={el.name}
              value={`${+el.value}$`}
              deleteBtn={() => deleteItem(el.id)}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CryptoForm;
