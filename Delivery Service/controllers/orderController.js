import express from "express";
import Product from "../Models/Product.js";
import Order from "../Models/Order.js";
import axios from "axios";

const router = express.Router();

//get all orders
export const getOrders = (async(req, res)=>{
    try {
        const orders = await Order.find({}).populate({
            path: "items",
            populate:{
                path: "item",
                select: "_id ItemName price description ",
                populate:{
                    path: "seller",
                    select: "-role -password -__v"
                }
            }
          }).populate({
              path: "customer",
              select: "-password"
          });
        return res.status(200).send(orders);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//get one orders
export const getOrder = (async(req, res)=>{
    try {
        const order = await Order.findById({ _id: req.params.id }).populate({
            path: "items",
            populate:{
                path: "item",
                select: "_id ItemName price description ",
                populate:{
                    path: "seller",
                    select: "-role -password -__v"
                }
            }
          });
        if(!order) return res.status(404).send("Order not found");
        return res.status(200).send(order);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//Add a order
export const createOrder = (async(req, res)=>{
    try {
        // let order = new Order({...req.body});

        // let tot = 0;

        // await Promise.all(order.items.map(async(i)=>{
        //     let product = await Product.findById(i.item);
        //     product.quantity -= i.qty;
        //     product.sold += i.qty;
        //     tot += product.price * i.qty;
        //     console.log(product.quantity);
        //     await product.save();
        // }))

        // order.totalPrice = tot;
        // order.save();
        
        const order = await axios.get(`http://localhost:5000/api/order/${req.body._doc._id}`)
        let delivery = new Order({...order.data})
        console.log(delivery);
        await delivery.save()
        return res.status(201).send("order");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update a order
export const updateOrder = (async(req, res)=>{
    try {
        const order = await Order.findById({ _id: req.params.id });
        if(!order) return res.status(404).send("Order not found");
        await Order.updateOne({ _id: order._id }, {...req.body});
        return res.status(200).send("Order Updated");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//delete a product
export const deleteOrder = (async(req, res)=>{
    try {
        const order = await Order.findById({ _id: req.params.id });
        if(!order) return res.status(404).send("Order not found");
        await order.remove()
        return res.status(200).send("Order Removed");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

export default router;