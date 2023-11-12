import express from "express"
import 'dotenv/config'
import connectDB from "./config/connectDB"
import initAPIRoutes from "./routes/api"
const app = express()
const port = process.env.PORT || 3000

connectDB()
initAPIRoutes(app)

app.listen(port, () => {
  console.log(`Server Booking listening on http://localhost:${port}`)
})