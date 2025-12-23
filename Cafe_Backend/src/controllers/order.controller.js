const Order = require("../models/Order");
const Product = require("../models/Product");

const createOrder = async (req, res) => {
  try {
    const { products, customerName, phone, address } = req.body;

    let total = 0;

    for (let item of products) {
  const product = await Product.findById(item.product);

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  if (product.stock < item.quantity) {
    return res.status(400).json({
      message: 'Stock insuficiente para ${product.name}'
    });
  }

  total += product.price * item.quantity;

  //  Descontar stock
  product.stock -= item.quantity;
  await product.save();
}
    

    const order = new Order({
      products,
      total,
      customerName,
      phone,
      address
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error al crear pedido" });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pedidos" });
  }
};
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate("products.product");

    if (!order) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar pedido" });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus
};