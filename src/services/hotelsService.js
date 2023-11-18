import mongoose from 'mongoose';
import Hotel from '../model/Hotel'

//API Administration
const handleGetAllListHotels = async () => {
  try {
    let data = await Hotel.find({})
    if (!data) {
      return {
        EM: 'Get all list hotels not found',
        EC: -3,
        DT: []
      }
    }
    return {
      EM: 'Ok!',
      EC: 0,
      DT: data
    }
  } catch (error) {
    return {
      EM: 'error something went wrong service',
      EC: -2
    }
  }
}

//API CLients
const handleGetHotelsHomePage = async (city, type, rating) => {
  try {
    let dataHotelsAll = await Hotel.find({})
    if (!dataHotelsAll) {
      return {
        EM: 'Find dataHotels not found',
        EC: -1,
        DT: []
      }
    }

    let filteredData = [];

    if (city) {
      filteredData = dataHotelsAll.filter(item => item.city.toLowerCase().replace(/\s/g, '') === city);
    } else if (type) {
      filteredData = dataHotelsAll.filter(item => item.type.toLowerCase().replace(/\s/g, '') === type);
    } else if (rating) {
      filteredData = await Hotel.find({}).sort({ rating: +rating })
    }

    if (filteredData.length > 0) {
      return {
        EM: `Ok get data success with ${city ? 'city' : type ? 'type' : rating && 'rating'}`,
        EC: 0,
        DT: filteredData
      };
    } else {
      return {
        EM: `Get data success with ${city ? 'city' : type ? 'type' : rating && 'rating'} not found!`,
        EC: -1,
        DT: []
      };
    }
  } catch (error) {
    return {
      EM: 'error something went wrong service',
      EC: -2
    }
  }

}

const handleGetHotelsById = async (id) => {
  try {
    const data = await Hotel.findById(id).exec()
    console.log('Found hotel:', data); // Add this line to log the found data
    if (!data) {
      return {
        EM: 'Find id hotels not found',
        EC: -1,
        DT: ''
      }
    }
    return {
      EM: 'Find id hotels success',
      EC: 0,
      DT: data
    }
  } catch (error) {
    console.log(error);
    return {
      EM: 'error something went wrong service',
      EC: -2
    }
  }
}

module.exports = { handleGetAllListHotels, handleGetHotelsHomePage, handleGetHotelsById }