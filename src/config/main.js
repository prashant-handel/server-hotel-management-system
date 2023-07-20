import mongoose from "mongoose";

export const connectDB = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/hotel_db");
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB");
    }
};
