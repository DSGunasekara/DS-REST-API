import express from 'express';
import cors from 'cors';
import connectDB from './Database/db.js';

import userRoute from './Routes/user.js';
import authRoute from "./Routes/auth.js";
import productRoute from "./Routes/Product.js";
import orderRoute from "./Routes/order.js";

const app = express();

//Database connection
connectDB().then(
    () => console.log("Database Connected...."),
    (error) => console.log(error)
  );
  
app.use(cors()); //cors added
app.use(express.json({ extended: false })); //enables json

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/card", cardRoute);

const PORT = process.env.PORT || 5002;

//starting app
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));