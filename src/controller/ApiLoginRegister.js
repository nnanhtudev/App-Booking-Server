import ApiLoginRegisterService from '../services/ApiLoginRegisterService'

const handleRegister = async (req, res) => {
  try {
    console.log(req.body)
    let user = await ApiLoginRegisterService.registerService(req.body)
    return res.status(200).json({
      EM: user.EM,
      EC: user.EC,
      DT: user.DT
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

const handleLogin = async (req, res) => {
  try {
    let user = await ApiLoginRegisterService.loginService(req.body)
    return res.status(200).json({
      EM: user.EM,
      EC: user.EC,
      DT: user.DT
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

module.exports = {
  handleRegister, handleLogin
}