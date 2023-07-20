import { roomModel } from "../models/roomModel.js";
import { orderModel } from "../models/orderModel.js";

export const getRooms = async () => {
  try {
    const roomsData = await roomModel.find();
//     const roomsData = await roomModel.aggregate([ 
//     { $group:{ _id:'$type', total: { $sum:1 } }
// }])


///////
const ACData = await roomModel.aggregate([
    { $match:{ type:'AC'}},
    { $group:{ _id:{ status:'$status'}, availAC: {$sum:1}}
}])

const NACData = await roomModel.aggregate([
    { $match:{ type:'NAC'}},
    { $group:{ _id:{ status:'$status'}, availNAC: {$sum:1}}
}])
///////


// const ACData = await roomModel.aggregate([
//   { $match:{ type:'AC'}},{$match: {status: 'false'}},
//   { $group:{ _id:{ status:'$status'}, availAC: {$push: {$$ROOT}}}
// }])


// const ACData = await orderModel.aggregate([
//   {
//     $match: {
//       type: 'AC',
//     },
//   },
//   {
//     $lookup: {
//       from: 'rooms', // The name of the "rooms" collection
//       localField: 'roomId',
//       foreignField: '_id',
//       as: 'roomDetails',
//     },
//   },
//   {
//     $unwind: '$roomDetails',
//   },
//   {
//     $project: {
//       _id: 0, // Exclude the _id field from the result
//       'roomDetails.status': 1, // Include only the status field of the room
//     },
//   },
// ])


// const statusData = await roomModel.aggregate([
//   // Stage 1
//   {
//       $match: {
//       name:'message_sent',
//       timestamp:{$gte:ISODate("2016-10-25T04:39:52.667+0000"),$lte:ISODate("2016-11-01T04:39:52.667+0000")}
//       }
//   },

//   // Stage 2
//   {
//       $group: {
//          _id:{user:'$user'},
//          counter:{$sum:1}
//       }
//   },

//   // Stage 3
//   {
//       $lookup: {
//           "from" : "User",
//           "localField" : "_id.user",
//           "foreignField" : "_id",
//           "as" : "user"
//       }
//   },

//   // Stage 4
//   {
//       $match: {
//        'user.country':'France' ,
//       counter:{$gte:3}
//       }
//   },

// ]);


    if (!ACData || !NACData || !roomsData) {
      return {
        status: 404,
        message: "Room data not found",
      };
    } else {
      return {
        status: 200,
        data: {ACData: ACData, NACData: NACData, roomsData: roomsData},
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "something went wrong",
      error: error.message,
    };
  }
};

export const postRooms = async (data) => {
  try {
    if (!data) {
      return {
        status: 404,
        message: "data not found",
      };
    } else {
      const roomData = new roomModel(data);
      await roomData.save();
      return {
        status: 200,
        data: roomData,
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "something went wrong",
    };
  }
};
