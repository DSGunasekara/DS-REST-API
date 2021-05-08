import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
import dotenv from "dotenv";

import User from "../Models/User.js";

dotenv.config();
const router = express.Router();

export const login = (async(req, res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("No user found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    const payload = {
      user
    };

    return jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.status(200).send({token, payload});
      }
    );
  } catch (error) {
    return res.status(500).send(error);
  }
});

export const checkUser = (async(req, res)=>{
  try {
    console.log(req.user);
    return res.status(200).send(req.user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
