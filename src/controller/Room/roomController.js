import roomsService from '../../services/roomService'

const getAllRoom = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page
      let limit = req.query.limit
      let data = await roomsService.getPaginate(+page, +limit)
      return res.status(200).json({
        EM: data.EM, //error message,
        EC: data.EC, //error code
        DT: data.DT, //data
      })
    } else {
      let data = await roomsService.handleGetAllListRooms()
      return res.status(200).json({
        EM: data.EM, //error message,
        EC: data.EC, //error code
        DT: data.DT, //data
      })
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      EM: 'error with form data',
      EC: -1,
      DT: []
    })
  }
}

module.exports = { getAllRoom }