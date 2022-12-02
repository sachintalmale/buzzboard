require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Db connected");
        })
        .catch((e) => {
            console.log(e, "Failed to connect Db");
        });
};

module.exports = connectDB;