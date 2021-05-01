const router = require("express").Router();
const User = require("../models/User");
const Product = require("../models/Product");

//get all products
router.get("/", async(req, res)=>{
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
router.get("/:id", async(req, res)=>{
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
router.post("/", async(req, res)=>{
    try {
        let product = new Product({...req.body});
        product = await product.save();
        return res.status(201).send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update a product
router.patch("/:id", async(req, res)=>{
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
router.delete("/:id", async(req, res)=>{
    try {
        const product = await Product.findById({ _id: req.params.id });
        if(!product) return res.status(404).send("Product not found");
        await product.remove()
        return res.status(200).send("Product Removed");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

module.exports = router;