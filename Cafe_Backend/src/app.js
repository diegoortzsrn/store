const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend de la tienda de café funcionando ☕");
});

app.use("/api/products", productRoutes);


app.use("/api/orders", orderRoutes);

module.exports = app;