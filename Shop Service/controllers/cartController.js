import express from "express";
import Cart from "../Models/Cart.js";
import User from "../Models/User.js";

const router = express.Router();

//get all products
export const getCartItems = (async(req, res)=>{
    try {
        const items = await Cart.find({}).populate({
            path: "customer",
            select: "-password",
          })
          .populate({
              path: "item"
          });
        return res.status(200).send(items);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//get one products
export const getCartItem = (async(req, res)=>{
    try {
        const item = await Cart.findById({ _id: req.params.id }).populate({
            path: "customer",
            select: "-password",
          })
          .populate({
              path: "item"
          });
        if(!item) return res.status(404).send("Cart item not found");
        return res.status(200).send(item);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//Add a product
export const createCartItem = (async(req, res)=>{
    try {
        let item = new Cart({...req.body});
        item = await item.save();
        return res.status(201).send(item);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update a product
export const updateCartItem = (async(req, res)=>{
    try {
        const item = await Cart.findById({ _id: req.params.id });
        if(!item) return res.status(404).send("Cart Item not found");
        await Cart.updateOne({ _id: item._id }, {...req.body});
        return res.status(200).send("Cart Item Updated");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//delete a product
export const deleteProduct = (async(req, res)=>{
    try {
        const item = await Cart.findById({ _id: req.params.id });
        if(!item) return res.status(404).send("Cart Item not found");
        await item.remove()
        return res.status(200).send("Cart Item Removed");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

export default router;