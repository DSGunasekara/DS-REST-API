// const mongoose = require("mongoose");
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  items:[
    {
        item:{
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
            seller:{
              name: {
                type: String,
                required: true,
              },
              email: {
                type: String,
                required: true,
              },
              contactNo: {
                type: String,
                required: true,
              },
              address:{
                type: String,
                required: true,
              }
          }
        },
        qty:{
            type: Number,
            required: true
        }
    }
  ],
  deliveryfee: {
    type: Number,
    required: true,
    default: 100
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  customer:{
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address:{
      type: String,
      required: true,
    }
  },
  status:{
    type: String,
    required: true,
    default: "Pending"
  }
},{ timestamps: true });

let Order = mongoose.model("DeliveryOrder", OrderSchema);

export default Order;
