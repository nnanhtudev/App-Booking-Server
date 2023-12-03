import searchService from "../../services/searchService";

const searchHotels = async (req, res) => {
  try {
    let data = await searchService.handleSearch(req.body);
    return res.status(200).json({
      EM: data.EM, //error message,
      EC: data.EC, //error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      EM: "error with form data",
      EC: -1,
      DT: [],
    });
  }
};

module.exports = { searchHotels };
