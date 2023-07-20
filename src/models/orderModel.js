import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    identity: {
        type: Number,
        require: true
    },
    checkIn: {
        type: String,
        require: true
    },
    checkOut: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    roomNo: [{
        type: Number,
        require: true
    }]

});

export const orderModel = mongoose.model('orders', orderSchema);