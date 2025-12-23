const express = require("express");
const router = express.Router();
const validateProduct = require("../middlewares/validateProduct");


const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");

// Crear producto
router.post("/", createProduct);

// Obtener todos los productos
router.get("/", getProducts);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.post("/", validateProduct, createProduct);
router.get("/", getProducts);
router.put("/:id", validateProduct, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;