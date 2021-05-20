import express from "express";

import Order from "../Models/Order.js";
import axios from "axios";
import sendMail from "../Utils/email.js"

const router = express.Router();


//Create a order
export const createOrder = (async(req, res)=>{
    try {        
        //get the details about the order from the shop service
        const order = await axios.get(`http://localhost:5000/api/order/${req.body._doc._id}`)
        let delivery = new Order({...order.data})
        //Send email about the order
        sendMail(delivery);
        await delivery.save()
        return res.status(201).send(delivery);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


export default router;