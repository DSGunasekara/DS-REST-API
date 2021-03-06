// const mongoose = require("mongoose");
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  ItemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description:{
    type: String
  },
  images:{
      type: String,
  },
  quantity:{
      type: Number,
      default: 0
  },
  sold:{
      type: Number,
      default: 0
  },
  seller:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
});

let Product = mongoose.model("Product", ProductSchema);

export default Product;
