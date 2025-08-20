import { useState } from "react";
import Products from "./components/Products";

function App() {
  const totalRecords = 194;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Products</h1>
      <Products totalRecords={totalRecords} />
    </div>
  );
}

export default App;
