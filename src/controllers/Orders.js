import { getOrders, inputOrders } from "../services/orders.js";
// import { ordersService } from "../services/orders/inputOrdersService.js";


export const GetOrders = async (req,res)=>{
    const data = await getOrders();
    // console.log(data.data.ordersData[0].acRooms);
    res.status(data.status).json(data);
}

export const InputOrders = async (req,res)=>{
    const data = await inputOrders(req.body);
    res.status(data.status).json(data);
}