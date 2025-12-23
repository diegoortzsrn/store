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
    <h2 className="title">Productos disponibles ☕</h2>

    {products.length === 0 && (
      <p className="empty">No hay productos disponibles</p>
    )}

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