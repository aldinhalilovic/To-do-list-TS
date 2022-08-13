import React from "react";
import "./BookingCard.css";

const BookingCard = (props) => {
  const { name, avarageRate, distance, place, town, comment, num, source } =
    props;
  return (
    <div className="place">
      <div className="bigCard">
        <div className="image">
          <img src={source} alt={name} />
        </div>
        <div className="main">
          <h1>{name}</h1>
          <div className="location">
            <a href="">
              {place}, {town}
            </a>
            <a href="">Prikaži na mapi</a>
            <a href="" className="km">
              {distance}km od centra
            </a>
          </div>
          <p className="description">
            Smešten u {place}, na {distance} km od centra {town}, hotel {name},
            nudi elegantne i udobne sobe sa besplatnim bežičnim internetom, bar
            u foajeu i terasu.
          </p>
        </div>
        <div className="review">
          <div className="text">
            <div className="rating">
              <div className="customers">
                <div className="first">{comment}</div>
                <div className="second"> {num} recenzija</div>
              </div>
              <div className="star">
                <h3>{avarageRate}</h3>
              </div>
            </div>
            <div className="price">
              <h2>Prikaži cene</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
