import React, { useState } from "react";
import CryptoForm from "../CryptoForm/CryptoForm";
import CryptoListItem from "../CryptoListItem/CryptoListItem";
import "./CryptoList.css";

const CryptoList = ({ cryptoItem, deletebtn }) => {
  // const [activeIndex, setActiveIndex] = useState(true);
  const activeIndex = 1;

  return (
    <div className="crypto-list">
      {/* <CryptoForm /> */}
      {cryptoItem.map((el) => (
        <div>
          <span key={el.id++}>
            <CryptoListItem
              name={el.name}
              value={`${el.value}$`}
              hour={el.oneHour}
              day={el.oneDay}
              week={el.oneWeek}
              market={el.marketCap}
              volume={el.volume}
              deleteBtn={() => deletebtn(el.id)}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
