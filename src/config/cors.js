import "dotenv/config";
import cors from "cors";

const handleOptionsRequest = (req, res, next) => {
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
  } else {
    next();
  }
};

const configCors = (app) => {
  // Sử dụng middleware cho tất cả các yêu cầu (bao gồm OPTIONS)
  app.use(handleOptionsRequest);

  app.use(
    cors({
      origin: [process.env.REACT_CLIENT_URL, process.env.REACT_ADMIN_URL],
      methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      credentials: true,
      allowedHeaders: "X-Requested-With,content-type,Authorization",
    })
  );

  // console.log("REACT_CLIENT_URL:", process.env.REACT_CLIENT_URL);
  // console.log("REACT_ADMIN_URL:", process.env.REACT_ADMIN_URL);
};

export default configCors;
