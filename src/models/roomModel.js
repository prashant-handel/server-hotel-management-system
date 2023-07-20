import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    type:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require:true
    },
    roomNo:{
        type: Number,
        require:true
    },
    status:{
        type: Boolean,
        require: true
    }
});

export const roomModel = mongoose.model('rooms',roomSchema);