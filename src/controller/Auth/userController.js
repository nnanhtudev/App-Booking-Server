import ApiLoginRegisterService from "../../services/userService";

const handleRegister = async (req, res) => {
  try {
    console.log(req.body);
    let user = await ApiLoginRegisterService.registerService(req.body);
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

const handleLogin = async (req, res) => {
  try {
    let user = await ApiLoginRegisterService.loginService(req.body);
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

const getAccount = async (req, res) => {
  try {
    return res.status(200).json({
      EM: "Ok",
      EC: 0,
      DT: {
        email: req.user.email,
        isAdmin: req.user.isAdmin,
      },
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

module.exports = {
  handleRegister,
  handleLogin,
  getAccount,
};
