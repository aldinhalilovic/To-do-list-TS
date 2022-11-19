import React from "react";
import { useSelector } from "react-redux";
import FinalCard from "../../components/FinalCard";

function Products() {
  const finalProducts = useSelector((state) => state.products.products);
  return (
    <div>
      <div>Final finishes.</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {finalProducts.map((product) => (
          <FinalCard el={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
