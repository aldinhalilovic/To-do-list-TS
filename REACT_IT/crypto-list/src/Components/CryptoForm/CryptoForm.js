import React, { useState } from "react";
import CryptoList from "../CryptoList/CryptoList";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import "./CryptoForm.css";

const CryptoForm = () => {
  const [cryptoItem, setCryptoItem] = useState({ name: "", value: "" });
  const [nameValue, setNameValue] = useState([
    {
      name: "Bitcoin",
      value: "$21,515.04",
      id: 1,
      oneHour: -0.1,
      oneDay: "+1.2",
      oneWeek: -9.51,
      marketCap: "$404.039.672.093",
      volume: "31.727.499.630",
    },
    {
      name: "Etherium",
      value: "1640",
      id: 2,
      oneHour: "+0.61",
      oneDay: "+4.52",
      oneWeek: -12.51,
      marketCap: "$198,336,706,737",
      volume: "17,890,732,617",
    },
    {
      name: "Tether",
      value: "1",
      id: 3,
      oneHour: 0.0,
      oneDay: 0.0,
      oneWeek: -0.02,
      marketCap: "$67,548,784,859",
      volume: "52,978,066,914",
    },
    {
      name: "USD Coin",
      value: "0.999",
      id: 4,
      oneHour: -0.3,
      oneDay: -0.01,
      oneWeek: -0.0,
      marketCap: "$52,289,823,927",
      volume: "5,446,317,940",
    },
    {
      name: "Cardano",
      value: "0.4615",
      id: 5,
      oneHour: "+0.65",
      oneDay: "+3.11",
      oneWeek: -17.08,
      marketCap: "$15,571,699,999",
      volume: "629,587,717",
    },
    {
      name: "Solana",
      value: "35.48",
      id: 6,
      oneHour: "+0.17",
      oneDay: "+3.61",
      oneWeek: -18.41,
      marketCap: "$12,386,720,530",
      volume: "941,618,015",
    },
    {
      name: "Dogecoin",
      value: "0.0687",
      id: 7,
      oneHour: "+0.45",
      oneDay: "+3.18",
      oneWeek: -21.18,
      marketCap: "$9,114,030,467",
      volume: "361,343,071",
    },
    {
      name: "Shiba Inu",
      value: "$0.00001321",
      id: 8,
      oneHour: "+0.38",
      oneDay: "+2.04",
      oneWeek: -16.74,
      marketCap: "$7,253,246,921",
      volume: "433,737,442",
    },
  ]);
  const deleteItem = (id) => {
    const newNameValue = nameValue.filter((el) => el.id !== id);
    setNameValue(newNameValue);
  };
  let nextId = 1;

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
        <CryptoList cryptoItem={nameValue} deletebtn={(id) => deleteItem(id)} />
      </div>
    </div>
  );
};

export default CryptoForm;
