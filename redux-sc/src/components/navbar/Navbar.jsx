import React from "react";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom: "2px solid black",
      }}
    >
      <h3>Shopping Cart</h3>
      <h3>Redux Toolkit</h3>
    </div>
  );
}

export default Navbar;
