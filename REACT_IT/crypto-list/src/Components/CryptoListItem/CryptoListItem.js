import React, { useState } from "react";
import "./CryptoListItem.css";

const CryptoListItem = ({
  name,
  value,
  hour,
  day,
  week,
  market,
  volume,
  deleteBtn,
}) => {
  const [showLessMore, setShowLessMore] = useState(false);

  return (
    <div>
      <div className="list-item">
        <h1 className="name">{name}</h1>
        <h1 className="value">{value}</h1>
        <button
          className="less-more"
          onClick={() => setShowLessMore((prev) => !prev)}
        >
          {showLessMore ? "Show less" : "Show more"}
        </button>
        <button onClick={deleteBtn} className="delete">
          X
        </button>
      </div>
      {showLessMore && (
        <div className="more-infos">
          <p>
            <span>{name}</span> has value of <span>{value}</span> currently. In
            relative to last hour, it went <span>{hour}%</span>. In past day, it
            is <span>{day}%</span>, but for last week it is <span>{week}%</span>
            . On market, currently this cryptovalue values for{" "}
            <span>{market}</span>. Now is about <span>{volume}</span>
            <span> {name}'s</span> in game.
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoListItem;
