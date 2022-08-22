import React, { useState } from "react";
import "./CryptoListItem.css";

const CryptoListItem = ({ name, value, deleteBtn }) => {
  const [showLessMore, setShowLessMore] = useState(false);

  return (
    <div>
      <div className="list-item">
        <h1 className="name">{name}</h1>
        <h1 className="value">{value}</h1>
        <button
          onClick={() => setShowLessMore((prev) => !prev)}
          className="less-more"
        >
          {!showLessMore ? "Show more" : "Show less"}
        </button>
        <button onClick={deleteBtn} className="delete">
          X
        </button>
      </div>
      {showLessMore && (
        <div style={{ backgroundColor: "white" }}>
          <p>
            {" "}
            {name} je trenutno {value}$
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoListItem;
