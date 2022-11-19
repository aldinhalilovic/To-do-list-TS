import { Button } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Itemcard } from "../../components/Itemcard";
import { productAction } from "../../store/productslice";
import items from "../../storageProducts/storageProducts.json";

function Shop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addingToCart = (el) => dispatch(productAction.addToCart(el));
  const removingFromCart = (el) => dispatch(productAction.removeFromCart(el));
  return (
    <div
      style={{
        width: "100%",
        minHeight: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          overflowY: "auto",
        }}
      >
        {items.map((el) => (
          <div
            style={{
              marginLeft: "30px",
            }}
            key={el.id}
          >
            <Itemcard
              el={el}
              addProduct={() => addingToCart(el)}
              removeProduct={() => removingFromCart(el)}
            />
          </div>
        ))}
      </div>
      <Button onClick={() => navigate("/cart")}>GO to cart</Button>
    </div>
  );
}

export default Shop;
