const express = require('express');
const cors = require('cors');
const connectDB = require('./Database/db')

const userRoute = require('./Routes/user');
const authRoute = require('./Routes/auth')

const app = express();

//Database connection
connectDB().then(
    () => console.log("Database Connected...."),
    (error) => console.log(error)
  );
  
app.use(cors()); //cors added
app.use(express.json({ extended: false })); //enables json

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/user", userRoute);
app.use("/api/login", authRoute);

const PORT = process.env.PORT || 5000;

//starting app
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));