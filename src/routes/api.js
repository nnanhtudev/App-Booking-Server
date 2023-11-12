import express from "express"
import userApiController from '../controller/userApiController'
const router = express.Router()

const initAPIRoutes = (app) => {
  router.get('/test', userApiController.createFunc)
  return app.use('/api/v1/', router)
}

export default initAPIRoutes