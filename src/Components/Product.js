import { useState } from "react";
import "./product.css";
const Product = ({ product }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="cardBox">
      <img src={product.image} alt={product.title} />
      <h2>Product Name : {product.title}</h2>
      <p className="price">Price : {product.price}</p>
      <button
        className="btn"
        onClick={() => setShowMore((current) => !current)}
      >
        {" "}
        {showMore ? "Hide details" : "Show More "}
      </button>

      {showMore && (
        <div className="details">
          <p>Description : {product.description}</p>
          <p className="category">Category : {product.category}</p>
          <p className="rate">Rating : {product.rating.rate}</p>
          <p className="count">Rating : {product.rating.count}</p>
        </div>
      )}
    </div>
  );
};
export default Product;
