function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <br></br><br></br>
      <button className="btn" onClick={() => onAdd(product)}>
        
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;