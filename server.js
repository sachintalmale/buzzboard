const express = require('express');
const app = express();
const connectDB = require("./config/db");
const orderRoutes = require('./routes/orders')

connectDB();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }))

app.use('/orders',orderRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server running on ",PORT)
})