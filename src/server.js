import express from "express";
import "dotenv/config";
import connectDB from "./config/connectDB";
import bodyParser from "body-parser";
import initAPIRoutes from "./routes/api";
import configCors from "./config/cors";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3000;

configCors(app);

connectDB();

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//config cookies parser
app.use(cookieParser());
initAPIRoutes(app);

app.listen(port, () => {
  console.log(`Server Booking listening on http://localhost:${port}`);
});
