function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <br></br>
      <b><p> Precio :   ${product.price}</p></b>
      <br></br>
      <b><p>Disponibles:  {product.stock}</p></b>


      <br></br><br></br>
      <button className="btn" onClick={() => window.open(`https://wa.me/50379106927?text=Hola,%20quisiera%20pedir%20${encodeURI(product.name)}`, '_blank') onAdd(product)}>
        
        Pedir a WhatsApp
      </button>
    </div>
  );
}
