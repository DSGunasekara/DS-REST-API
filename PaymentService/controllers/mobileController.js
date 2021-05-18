import express from "express";
import MobilePay from "../Models/MobilePay.js";
import sendMail from "../Utils/email.js"

const router = express.Router();

export const addPayment = ( async(req, res)=>{
    try {
        let mobilePay = new MobilePay({...req.body._doc});
        await mobilePay.save();
        sendMail(mobilePay, "mobile")
        res.status(200).send("Paid");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

export default router;