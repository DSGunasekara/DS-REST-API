import express from "express";
import CardPay  from "../Models/CardPay.js";
import sendMail from '../Utils/email.js'

const router = express.Router();

export const addPayment = ( async(req, res)=>{
    try {
        let cardPay = new CardPay({...req.body._doc});
        await cardPay.save();
        //send email to user about card transaction
        sendMail(cardPay, "card");
        res.status(200).send("Paid");
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

export default router;