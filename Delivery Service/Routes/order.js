const router = require("express").Router();
// const User = require("../models/User");
const Order = require("../models/Order");

//get all orders
router.get("/", async(req, res)=>{
    try {
        const orders = await Order.find({});
        return res.status(200).send(orders);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//get one orders
router.get("/:id", async(req, res)=>{
    try {
        const order = await Order.findById({ _id: req.params.id });
        if(!order) return res.status(404).send("Order not found");
        return res.status(200).send(order);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//Add a order
router.post("/", async(req, res)=>{
    try {
        let order = new Order({...req.body});
        order = await order.save();
        return res.status(201).send(order);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update a order
router.patch("/:id", async(req, res)=>{
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
router.delete("/:id", async(req, res)=>{
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

module.exports = router;