import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductCard from "./ProductCard";

function ProductList({ onAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data);
      } catch (error) {
        console.error("Error al cargar productos", error);
      }
    };

    fetchProducts();
  }, []);

 return (
  <div className="container">
    <h1 className="title"><center>Productos disponibles ☕</center></h1>

    {products.length === 0 && (
      <p className="empty"><br></br><center>No hay productos disponibles</center></p>
    )}
    <br></br>

    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  </div>
);
}
export default ProductList;