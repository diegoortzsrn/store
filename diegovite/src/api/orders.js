
const mongoose = require("mongoose");
import axios from "axios";
const API = "http://localhost:4000/api/orders";
const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        }
      }
    ],

    total: {
      type: Number,
      default: 0
    },

    customerName: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["pendiente", "enviado", "entregado"],
      default: "pendiente"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
export const createOrder = (order) =>
  axios.post(API, order);