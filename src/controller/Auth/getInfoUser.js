import { verifyToken } from "../../middleware/JWTAction";

const getInfoUser = async (req, res) => {
  try {
    let cookies = req.cookies;
    if (!cookies.jwt) {
      return res.status(200).json({
        EM: "Authentication failed",
        EC: -1,
        DT: "",
      });
    }
    let token = cookies.jwt;
    let data = verifyToken(token);
    if (data) {
      return res.status(200).json({
        EM: "Ok!",
        EC: 0,
        DT: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      EM: "error with form data",
      EC: -1,
      DT: [],
    });
  }
};

const Logout = async (req, res) => {
  try {
    await res.clearCookie("jwt");
    return res.status(200).json({
      EM: "Logged out successfully",
      EC: 0,
      DT: "",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      EM: "error with form data",
      EC: -1,
      DT: [],
    });
  }
};

module.exports = { getInfoUser, Logout };
