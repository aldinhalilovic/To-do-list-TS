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
  // activeIndex,
  // setActiveIndex,
  // showLessMore,
  // setShowLessMore,
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
          {showLessMore ? <span>Show less</span> : <span>Show More</span>}
        </button>
        <button onClick={deleteBtn} className="delete">
          X
        </button>
      </div>
      {/* div za show more */}
    </div>
  );
};

export default CryptoListItem;
