import React from "react";
import { useNavigate } from "react-router-dom";
import items from "../../storageProducts/storageProducts.json";
import { Button } from "@mantine/core";
import { Itemcard } from "../../components/Itemcard/index";
import { useSelector } from "react-redux";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to my shop!</h1>
      <h3>Please go to main page!</h3>
      <Button onClick={() => navigate("/shop")}>Go to shop</Button>
    </div>
  );
}

export default Welcome;
