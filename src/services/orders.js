import { orderModel } from "../models/orderModel.js";

export const getOrders = async ()=>{
    try {
        const ordersData = await orderModel.find();
        if (!ordersData) {
          return {
            status: 404,
            message: "Order data not found",
          };
        } else {
          return {
            status: 200,
            data: {ordersData: ordersData}
          };
        }
      } catch (error) {
        return {
          status: 500,
          message: "something went wrong",
          error: error.message,
        };
      }
    }


export const inputOrders = async (data)=>{
    try {
        const saveData = new orderModel(data);
        console.log(saveData);
        if (!saveData) {
          return {
            status: 404,
            message: "Order data not found",
          };
        } else {
            saveData.save();
          return {
            status: 200,
            data: {saveData}
          };
        }
      } catch (error) {
        return {
          status: 500,
          message: "something went wrong",
          error: error.message,
        };
      }
    }
