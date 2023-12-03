import Hotel from "../model/Hotel";
import Transaction from "../model/Transaction";

const handleSearch = async (data) => {
  try {
    let reqSearch = data.state;
    if (!reqSearch) {
      return {
        EM: `Not Found find keyword destination`,
        EC: -1,
        DT: [],
      };
    }
    //Get Hotel location city
    if (reqSearch.destination === "") {
      return {
        EM: `Please enter destination`,
        EC: -1,
        DT: [],
      };
    }
    let dataHotel = await Hotel.find({
      city: reqSearch.destination,
    })
      .populate({
        path: "rooms",
      })
      .lean();
    if (!dataHotel) {
      return {
        EM: `Find a Room with City ${reqSearch.destination} not found`,
        EC: -1,
        DT: [],
      };
    }
    const mapRoomDataHotel = await Promise.all(
      dataHotel.map(async (hotel) => {
        const filteredRooms = hotel.rooms.filter(
          (room) =>
            room.roomNumbers.length === reqSearch.options.room ||
            room.maxPeople === reqSearch.options.adult + reqSearch.options.children
        );
        return {
          ...hotel,
          rooms: filteredRooms,
        };
      })
    );
    const nonEmptyBlocks = mapRoomDataHotel.filter((block) => block.rooms.length > 0);
    if (nonEmptyBlocks.length === 0) {
      return {
        EM: `No matching results were found Room: ${reqSearch.options.room} or Adult:${reqSearch.options.adult} & Children: ${reqSearch.options.children}`,
        EC: -1,
        DT: [],
      };
    }
    // Check rooms transactions if dates & roomNumber
    const listTransactions = await Transaction.find({});
    const finalFilteredHotels = nonEmptyBlocks.filter((hotel) => {
      const isTransactionValid = listTransactions.every((transaction) => {
        return (
          new Date(reqSearch.date[0].startDate) >= new Date(transaction.dateEnd) ||
          new Date(reqSearch.date[0].endDate) <= new Date(transaction.dateStart) ||
          transaction.hotel.toString() === hotel._id.toString()
        );
      });

      return isTransactionValid;
    });
    if (finalFilteredHotels.length === 0) {
      return {
        EM: "During that time the hotel had no available rooms",
        EC: -1,
        DT: [],
      };
    }
    return {
      EM: "Ok!",
      EC: 0,
      DT: { hotel: nonEmptyBlocks },
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};

module.exports = { handleSearch };
