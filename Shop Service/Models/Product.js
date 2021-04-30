const mongoose = require("mongoose");

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
      type: Array,
      default: []
  },
  quantity:{
      type: Number,
      default: 0
  },
  sold:{
      type: Number,
      default: 0
  }
});

module.exports = mongoose.model("Product", ProductSchema);
