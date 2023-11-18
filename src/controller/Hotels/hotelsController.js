import hotelsService from '../../services/hotelsService'

const getAllListHotels = async (req, res) => {
  try {
    if (req.query.city || req.query.type || req.query.rating) {
      let dataHotels = await hotelsService.handleGetHotelsHomePage(req.query.city, req.query.type, req.query.rating)
      return res.status(200).json({
        EM: dataHotels.EM,
        EC: dataHotels.EC,
        DT: dataHotels.DT
      })
    } else {
      let dataHotels = await hotelsService.handleGetAllListHotels()
      return res.status(200).json({
        EM: dataHotels.EM,
        EC: dataHotels.EC,
        DT: dataHotels.DT
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

const getHotelById = async (req, res) => {
  try {
    const { id } = req.params
    let hotelById = await hotelsService.handleGetHotelsById(id)
    return res.status(200).json({
      EM: hotelById.EM,
      EC: hotelById.EC,
      DT: hotelById.DT
    })
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      EM: 'error with form data',
      EC: -1,
      DT: []
    })
  }
}

module.exports = { getAllListHotels, getHotelById }