import Room from '../model/Room'

const getPaginate = async (page, limit) => {
  //Skip <=> offset = (page - 1) * limit
  try {
    const rows = await Room.find({}, 'id title desc maxPeople price roomNumbers').skip(page).limit(limit)
    const count = await Room.countDocuments({})
    let totalPages = Math.ceil(count / limit)
    let data = {
      totalRow: count,
      totalPages,
      rooms: rows
    }
    return {
      EM: 'Fetching room successfully',
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

const handleGetAllListRooms = async () => {
  try {
    const data = await Room.find({}, 'id title desc maxPeople price roomNumbers')
    if (!data) {
      return {
        EM: 'Get all list rooms not found',
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

module.exports = { handleGetAllListRooms, getPaginate }