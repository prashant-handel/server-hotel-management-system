import { getRooms, postRooms } from "../services/rooms.js";

export const GetRooms = async (req,res)=>{
    let data = await getRooms();
    console.log(data);
    res.status(data.status).json(data);
}

export const PostRooms = async (req,res)=>{
    let data = await postRooms(req.body);
    console.log(data.data);
    res.status(data.status).json(data);
}