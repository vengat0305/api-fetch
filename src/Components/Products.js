import { useState, useEffect } from "react";
import "./products.css";
import Product from "./Product";
const Products = () => {
  const [productsList, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container cardsContainer">
      {/* <h1>Products Lists</h1> */}
      {productsList.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Products;
