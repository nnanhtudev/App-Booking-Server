import Room from "../model/Room";
const mongoose = require("mongoose");

const getPaginate = async (page, limit) => {
  //Skip <=> offset = (page - 1) * limit
  try {
    console.log("Loading paginate", page, limit);
    const rows = await Room.find({}, "id title desc maxPeople price roomNumbers").skip(page).limit(limit);
    const count = await Room.countDocuments({});
    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRow: count,
      totalPages,
      rooms: rows,
    };
    return {
      EM: "Fetching room successfully",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};

const handleGetAllListRooms = async () => {
  try {
    const data = await Room.find({}, "id title desc maxPeople price roomNumbers");
    if (!data) {
      return {
        EM: "Get all list rooms not found",
        EC: -3,
        DT: [],
      };
    }
    return {
      EM: "Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};

const handleGetRoomByIds = async (roomId) => {
  try {
    const fetchDataRoom = roomId.data;
    const objectIdRoomIds = fetchDataRoom.map((roomId) => new mongoose.Types.ObjectId(roomId));
    const data = await Room.find({ _id: { $in: objectIdRoomIds } });

    if (!data || data.length === 0) {
      return {
        EM: "No rooms found",
        EC: -3,
        DT: [],
      };
    }

    return {
      EM: "Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error occurred while fetching rooms",
      EC: -2,
      DT: [],
    };
  }
};

module.exports = { handleGetAllListRooms, getPaginate, handleGetRoomByIds };
