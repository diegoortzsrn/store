import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Café en grano ☕</h1>

      {products.map(product => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;