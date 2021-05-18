import express from "express";
import Product from "../Models/Product.js";
import Cart from "../Models/Cart.js";

const router = express.Router();

//get all products
export const getProducts = (async(req, res)=>{
    try {
        const products = await Product.find({}).populate({
            path: "seller",
            select: "-password",
          });
        return res.status(200).send(products);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//get one products
export const getProduct = (async(req, res)=>{
    try {
        const product = await Product.findById({ _id: req.params.id }).populate({
            path: "seller",
            select: "-password",
          });
        if(!product) return res.status(404).send("Product not found");
        return res.status(200).send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//Add a product
export const createProduct = (async(req, res)=>{
    try {
        console.log(req.file);
        let product = new Product({...req.body});
        product.images = req.file.path
        product = await product.save();
        return res.status(201).send(product);
        // return res.status(200).send('ok')
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update a product
export const updateProduct = (async(req, res)=>{
    try {
        const product = await Product.findById({ _id: req.params.id });
        if(!product) return res.status(404).send("Product not found");
        await Product.updateOne({ _id: product._id }, {...req.body});
        return res.status(200).send("Product Updated");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//delete a product
export const deleteProduct = (async(req, res)=>{
    try {
        const product = await Product.findById({ _id: req.params.id });
        if(!product) return res.status(404).send("Product not found");
        await Cart.deleteMany({item: product._id});
        await product.remove()
        return res.status(200).send("Product Removed");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

export default router;