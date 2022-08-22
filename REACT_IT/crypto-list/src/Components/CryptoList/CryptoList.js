import React from "react";
import CryptoForm from "../CryptoForm/CryptoForm";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import "./CryptoList.css";

const CryptoList = ({ cryptoItem, deletebtn }) => {
  return (
    <div className="crypto-list">
      {/* <CryptoForm /> */}
      {cryptoItem.map((el) => (
        <span key={el.id++}>
          <CryptoListItem
            name={el.name}
            value={`${+el.value}$`}
            deleteBtn={() => deletebtn(el.id)}
          />
        </span>
      ))}
    </div>
  );
};

export default CryptoList;
