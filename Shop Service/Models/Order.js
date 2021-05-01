const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items:[
    {
        item:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        qty:{
            type: Number,
            required: true
        }
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
