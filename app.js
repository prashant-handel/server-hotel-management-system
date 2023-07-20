import express from "express";
import { connectDB } from "./src/config/main.js";
import { GetRooms, PostRooms } from "./src/controllers/Rooms.js";
import { GetOrders, InputOrders } from "./src/controllers/Orders.js";
import cors from "cors";
// import { inputOrders, getOrders } from "./src/controllers/ordersController.js";
const port = 5000;
const app = express();
app.use(express.json());
app.use(cors({credentials: true}));

connectDB();

// Rooms
app.get('/rooms',GetRooms);
app.post('/rooms',PostRooms);
// app.get('/rooms',PostRooms);

// Orders
app.get('/orders',GetOrders);
app.post('/orders',InputOrders);

app.listen(port, ()=>{
    console.log('App is listening on port: ' + port);
})
