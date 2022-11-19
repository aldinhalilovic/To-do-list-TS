import { Button } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Itemcard } from "../../components/Itemcard";
import productslice, { productAction } from "../../store/productslice";

function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const removeProduct = (el) => dispatch(productAction.removeFromCart(el));
  const reset = () => dispatch(productAction.resetCart());
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <h1>CART</h1>
      <div
        style={{
          width: "700px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {cartItems.map((el) => (
          <Itemcard
            el={el}
            key={el.id}
            removeProduct={() => removeProduct(el)}
          />
        ))}
      </div>
      <Button.Group>
        <Button onClick={() => navigate("/shop")} variant="outline">
          Go back to shop?
        </Button>
        <Button onClick={() => navigate("/products")}>
          Go to final Products?
        </Button>
        <Button onClick={() => reset()} variant="outline">
          Reset cart
        </Button>
      </Button.Group>
    </div>
  );
}

export default Cart;
