import express from "express"
import ApiLoginRegister from '../controller/ApiLoginRegister'

const router = express.Router()

const initAPIRoutes = (app) => {
  router.post('/register', ApiLoginRegister.handleRegister)
  router.post('/login', ApiLoginRegister.handleLogin)
  return app.use('/api/v1/', router)
}

export default initAPIRoutes