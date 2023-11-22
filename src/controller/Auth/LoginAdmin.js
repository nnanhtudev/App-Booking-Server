import { loginService } from "../../services/LoginAdminService";

const handleLoginAdmin = async (req, res) => {
  try {
    let user = await loginService(req.body);
    //set cookie
    res.cookie("jwt", user.DT.access_token, { httpOnly: true });
    return res.status(200).json({
      EM: user.EM,
      EC: user.EC,
      DT: user.DT,
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

module.exports = { handleLoginAdmin };
