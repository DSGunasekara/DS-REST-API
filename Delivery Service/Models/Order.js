const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Items:[
    {
      name:{
        type: String,
        required: true,
      }, 
      quantity:{
        type: Number,
        required: true
      },
      price:{
        type: Number,
        required: true
      }
    }
  ],
  deliveryCharge:{
    type: Number,
    required: true,
    default: 100,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  senderLocation:{
    type: String,
    required: true,
  },
  reciverLocation:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Order", OrderSchema);
